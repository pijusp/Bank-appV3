import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import CookieMonster from "./Components/CookieMonster";

function App() {
    return (
        <>
            <Home />
            <CookieMonster />
        </>
    );
}

export default App;
