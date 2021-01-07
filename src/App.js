import "styles/reset.css";
import "styles/bootstrap.css";
import "styles/custom.css";

import Routes from "routes";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
}

export default App;
