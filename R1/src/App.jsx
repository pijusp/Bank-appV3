import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import CookieMonster from "./Components/CookieMonster";
import Login from "./Components/Login";

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Home />
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    <CookieMonster />
                </div>
                <div className="col-7">
                    <Login />
                </div>
            </div>
        </div>
    );
}

export default App;
