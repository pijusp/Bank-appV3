import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
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
