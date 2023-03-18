const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const cookieParser = require("cookie-parser");
const md5 = require("md5");

// Jei bus laiko, pabandyti su var sha512 = require("sha512");@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const app = express();
const port = 3003;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(cookieParser());

//Login
app.post("/cookie", (req, res) => {
    if (req.body.delete) {
        res.cookie("cookieMonster", "", { maxAge: -3600 });
    } else {
        res.cookie("cookieMonster", req.body.text, { maxAge: 3600 });
    }

    res.json({ msg: "OK" });
});
app.post("/login", (req, res) => {
    const users = JSON.parse(fs.readFileSync("./data/accounts.json", "utf8"));
    const name = req.body.name;
    const psw = md5(req.body.psw);

    const user = users.find((u) => u.name === name && u.psw === psw);
    if (user) {
        const sessionId = md5(uuidv4()); // Should be valid cryptography!!!
        user.session = sessionId;

        fs.writeFileSync("./data/accounts.json", JSON.stringify(users), "utf8");
        res.cookie("magicNumberSession", sessionId);
        res.json({
            status: "ok",
            name: user.name,
        });
    } else {
        res.json({
            status: "error",
        });
    }
});

app.get("/login", (req, res) => {
    const users = JSON.parse(fs.readFileSync("./data/accounts.json", "utf8"));
    const user = req.cookies.magicNumberSession
        ? users.find((u) => u.session === req.cookies.magicNumberSession)
        : null;

    if (user) {
        res.json({
            status: "ok",
            name: user.name,
        });
    } else {
        res.json({
            status: "error",
        });
    }
});
app.post("/logout", (req, res) => {
    res.cookie("magicNumberSession", "***");
    res.json({
        status: "logout",
    });
});

//API
app.get("/users", (req, res) => {
    let allData = fs.readFileSync("./data/users.json", "utf8");
    allData = JSON.parse(allData);
    res.json(allData);
});

app.post("/users", (req, res) => {
    let allData = fs.readFileSync("./data/users.json", "utf8");
    allData = JSON.parse(allData);
    const id = uuidv4();
    const data = {
        id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        balance: req.body.balance,
    };
    allData.push(data);
    allData = JSON.stringify(allData);
    fs.writeFileSync("./data/users.json", allData, "utf8");
    res.json({
        message: { text: "New user is saved", type: "success" },
    });
});
app.delete("/users/:id", (req, res) => {
    let allData = fs.readFileSync("./data/users.json", "utf8");
    allData = JSON.parse(allData);
    let deletedData = allData.filter((d) => req.params.id !== d.id);
    deletedData = JSON.stringify(deletedData);
    fs.writeFileSync("./data/users.json", deletedData, "utf8");
    res.json({ message: { text: "The user was deleted", type: "danger" } });
});
app.patch("/users/:id/balance", (req, res) => {
    const userId = decodeURI(req.params.id);
    const amount = parseInt(req.body.balance);
    // read the JSON file
    const users = JSON.parse(fs.readFileSync("./data/users.json", "utf8"));

    // find the user with the matching ID
    const user = users.find((u) => u.id === userId);

    // if user is not found, return an error
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    // update the user's balance
    user.balance += amount;

    // write the updated data back to the JSON file
    fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 2));

    // return the updated user data
    res.json(user);
});

app.listen(3003, () => {
    console.log(`Server running on port ${port}`);
});
