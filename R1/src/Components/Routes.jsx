import { useContext, useState } from "react";
import Auth from "./Auth";
import { Global } from "./Global";
import Login from "./Login";
import Home from "./Home";
import Menu from "./Menu";

function Routes() {
    const { route } = useContext(Global);
    const [numUsers, setNumUsers] = useState(0);
    const [totalBalance, setTotalBalance] = useState(0);
    switch (route) {
        case "bank":
            return (
                <Auth>
                    <Home
                        setNumUsers={setNumUsers}
                        setTotalBalance={setTotalBalance}
                    />
                </Auth>
            );
        case "login":
            return <Login />;
        case "menu":
            return <Menu numUsers={numUsers} totalBalance={totalBalance} />;
        default:
            return <Menu numUsers={numUsers} totalBalance={totalBalance} />;
    }
}

export default Routes;
