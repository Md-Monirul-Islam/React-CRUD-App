import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;