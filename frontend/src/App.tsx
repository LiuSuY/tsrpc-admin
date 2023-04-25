import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/student/home";

const App = () => {

    return (
        <div className="h-full w-full">
            <BrowserRouter>
                <Routes>
                    <Route path="/Login" Component={Login}></Route>
                    <Route path="/" Component={Home}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;