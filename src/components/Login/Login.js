import axios from 'axios'
import swAlert from "@sweetalert/with-react"
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import {Button,Snackbar,Alert} from '@mui/material'
import { forwardRef, useState } from 'react'


//redirect cambi a Navigate
//useHistory cambia a useNavigate 

const Login = () => {

    const navigate=useNavigate ();

    const submitHandler = e => {
        e.preventDefault();
        

        const email= e.target.email.value;
        const password=e.target.password.value;
        
        

        const regexEmail = 
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email==='' || password===''){
            swAlert(<h2>Los campos no pueden estar vacios</h2>)
            return
        }
        if(!regexEmail.test(email)){
            swAlert(<h2>Debes escribir una direccion de correo electronico valida.</h2>)
            return
        }

        console.log("La informacion esta ok")

        axios
            .post('http://challenge-react.alkemy.org',{email,password})
            .then(res => {
                swAlert(<h2>Ingresaste correctamente</h2>)
                const tokenRecibido=res.data.token
                localStorage.setItem("token",tokenRecibido);
                navigate("/listado")
            })


        
    }
    const handleClose = (e) => {
        //setShowMessage()
    }

    const [showMessage, setShowMessage]= useState({
        status: false,
        message: false,
        type: ''
    });

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

        <Snackbar open={showMessage.status} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                This is a success message!
            </Alert>
        </Snackbar>
        </>
       
    )
}

export default Login;