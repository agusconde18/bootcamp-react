import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../Login/Login'
import AlertasSnack from '../Alertas/AlertasSnack'
import Listado from '../Login/Listado';
import React, {  useState } from 'react'

const AppRouter = () =>{
    const [showMessage, setShowMessage]= useState({
        status: false,
        message: '',
        type: 'error'
    });

    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login showMessage={showMessage} setShowMessage={setShowMessage}/>}/>
                    <Route path="/listado" element={<Listado showMessage={showMessage} setShowMessage={setShowMessage}/>}/>
                </Routes>
                <AlertasSnack showMessage={showMessage} setShowMessage={setShowMessage}/>
        </BrowserRouter>
    )
}

export default AppRouter;