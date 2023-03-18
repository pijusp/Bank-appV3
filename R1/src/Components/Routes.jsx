import { useContext } from "react";
import Auth from "./Auth";
import { Global } from "./Global";
import Login from "./Login";
import Home from "./Home";

function Routes() {
    const { route } = useContext(Global);

    switch (route) {
        case "home":
            return (
                <Auth>
                    <Home />
                </Auth>
            );
        case "login":
            return <Login />;
        default:
            return null;
    }
}

export default Routes;
