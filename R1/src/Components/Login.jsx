import { useState } from "react";
import { useContext } from "react";
import { Global } from "./Global";
import axios from "axios";
import { baseURL } from "../Services/userService";

function Login() {
    const [userName, setUserName] = useState(null);
    const [error, setError] = useState(null);
    const [name, setName] = useState("");
    const [psw, setPsw] = useState("");

    const { setLogged, setAuthName } = useContext(Global);
    const login = (_) => {
        axios
            .post(`${baseURL}/login`, { name, psw }, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                if (res.data.status === "ok") {
                    setUserName(res.data.name);
                    setName("");
                    setPsw("");
                    setError(null);
                    setLogged(true);
                    setAuthName(res.data.name);
                } else {
                    setError(true);
                    setUserName(null);
                }
            });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-5">
                    <div className="card mt-4">
                        <div className="card-header">
                            {error ? (
                                <span style={{ color: "crimson" }}>
                                    Login Error
                                </span>
                            ) : (
                                <span>Login</span>
                            )}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                {userName ? (
                                    <span>Hello, {userName}</span>
                                ) : (
                                    <span>Hello, guest</span>
                                )}
                            </h5>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={psw}
                                    onChange={(e) => setPsw(e.target.value)}
                                />
                            </div>
                            <button
                                className="btn btn-primary m-1"
                                onClick={login}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
