import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import View from "./components/student/View";
import Edit from "./components/student/Edit";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/view/:id" element={<View />} />
                    <Route exact path="/edit/:id" element={<Edit />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;