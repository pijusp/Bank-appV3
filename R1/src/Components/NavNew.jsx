import { useContext } from "react";
import { Global } from "./Global";
import Nav from "./Nav";

const NavNew = () => {
    const { route } = useContext(Global);

    return <>{route !== "login" && <Nav />}</>;
};

export default NavNew;
