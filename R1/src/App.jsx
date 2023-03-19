import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { GlobalProvider } from "./Components/Global";
import Nav from "./Components/Nav";

import NavNew from "./Components/NavNew";
import Routes from "./Components/Routes";

function App() {
    return (
        <GlobalProvider>
            <NavNew />

            <Routes />
        </GlobalProvider>
    );
}

export default App;
