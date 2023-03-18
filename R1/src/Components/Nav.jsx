import { useContext } from "react";
import { Global } from "./Global";

function Nav() {
    const { route, setRoute, authName, logOut } = useContext(Global);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="nav-top">
                    <div className="navbar-brand">Bank users</div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span
                                    onClick={(_) => setRoute("home")}
                                    className={
                                        "nav-link" +
                                        (route === "home" ? " active" : "")
                                    }
                                >
                                    Home
                                </span>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        {authName ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <b>{authName}</b>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link" onClick={logOut}>
                                        Logout
                                    </span>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <span
                                    onClick={(_) => setRoute("login")}
                                    className="nav-link"
                                >
                                    Login
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
