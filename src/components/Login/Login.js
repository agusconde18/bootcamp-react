import axios from 'axios'
import swAlert from "@sweetalert/with-react"


const Login = () => {



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

        if(email!=="challenge@alkemy.org"||password!== "react"){
            swAlert(<h2>Credenciales invalidas</h2>)
            return;
        }

        console.log("La informacion esta ok")

        axios
            .post('http://challenge-react.alkemy.org',{email,password})
            .then(res => {
                swAlert(<h2>Ingresaste correctamente</h2>)
                const tokenRecibido=res.data.token
                localStorage.setItem("token",tokenRecibido);
            })
    }

    return(
        <>
        <h2>Formulario de Login</h2>
        <form onSubmit={submitHandler}>
            <label>
                <span>Correo electronico: </span>
            <input type="text" name="email"/>
            </label>
            <br/>
            <label>
            <span>Contraseña:</span>
            <input type="password" name="password"/>
            </label>
            
            <br/>
            <button type="submit">Ingresar</button>
        </form>
        </>
       
    )
}

export default Login;