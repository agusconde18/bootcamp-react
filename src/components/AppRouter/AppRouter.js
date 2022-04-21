import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../Login/Login'
import Listado from '../Login/Listado';

const AppRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/listado" element={<Listado/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;