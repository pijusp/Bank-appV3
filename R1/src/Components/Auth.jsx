import { useContext, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import Login from "./Login";
import { Global } from "./Global";
import { baseURL } from "../Services/userService";

function Auth({ children }) {
    const { setAuthName, logged, setLogged } = useContext(Global);

    useEffect(() => {
        axios.get(`${baseURL}/login`, { withCredentials: true }).then((res) => {
            console.log(res.data);
            if (res.data.status === "ok") {
                setLogged(true);
                setAuthName(res.data.name);
            } else {
                setLogged(false);
                setAuthName(null);
            }
        });
    }, []);

    if (null === logged) {
        return <Loader />;
    }

    if (true === logged) {
        return <>{children}</>;
    }
    if (false === logged) {
        return <Login />;
    }
}

export default Auth;
