import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import {Button} from '@mui/material'
import React, { forwardRef, useState } from 'react'
import AlertasSnack from '../Alertas/AlertasSnack'

//redirect cambi a Navigate
//useHistory cambia a useNavigate 

const Login = ({showMessage,setShowMessage}) => {

    
    const navigate=useNavigate ();

    const submitHandler = e => {
        e.preventDefault();
        

        const email= e.target.email.value;
        const password=e.target.password.value;
        
        

        const regexEmail = 
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email==='' || password===''){
            setShowMessage({type: "error", message: "Los campos no pueden estar vacios", status: true})
            return
        }
        if(!regexEmail.test(email)){
            setShowMessage({type: "error", message: "Debes escribir una direccion de correo electronico valida.", status: true})
            return
        }

        console.log("La informacion esta ok")

        axios
            .post('http://challenge-react.alkemy.org',{email,password})
            .then(res => {
                setShowMessage({type: "success", message: "Ingresaste correctamente", status: true})
                const tokenRecibido=res.data.token
                localStorage.setItem("token",tokenRecibido);
                navigate("/listado")
            })
            .catch(e =>{
                setShowMessage({type: "error", message: "El usuario o la clave no es correcta.", status: true})     
            })


        
    }
    

    

    return(
        <>
        <h2>Formulario de Login</h2>
        <form onSubmit={submitHandler}>
            
            <TextField id="outlined-basic" label="Correo Electrónico" variant="outlined" type="email" name="email"/>
            <br/> <br/>           
            <TextField id="outlined-basic" label="Contraseña" variant="outlined" type="password" name="password"/>
            <br/>
            <br/> 
            <Button type="submit" variant="contained">Iniciar Sesion</Button>
        </form>

        
        </>
       
    )
}

export default Login;