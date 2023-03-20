import { createContext, useState } from "react";
import { baseURL } from "../Services/userService";

import axios from "axios";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
    const [route, setRoute] = useState("home");
    const [logged, setLogged] = useState(null);
    const [authName, setAuthName] = useState(null);

    const logOut = (_) => {
        axios
            .post(`${baseURL}/logout`, {}, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setLogged(false);
                setAuthName(false);
                setRoute("menu");
            });
    };

    return (
        <Global.Provider
            value={{
                // route
                route,
                setRoute,
                // auth
                authName,
                setAuthName,
                logOut,
                logged,
                setLogged,
            }}
        >
            {children}
        </Global.Provider>
    );
};
