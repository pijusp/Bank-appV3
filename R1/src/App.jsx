import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";
import CookieMonster from "./Components/CookieMonster";
import Login from "./Components/Login";
import { GlobalProvider } from "./Components/Global";
import Nav from "./Components/Nav";
import Routes from "./Components/Routes";

function App() {
    return (
        <GlobalProvider>
            <Nav />

            <Routes />
        </GlobalProvider>
    );
}

export default App;
