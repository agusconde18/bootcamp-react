import axios from 'axios'

const Login = () => {

    const submitHandler = e => {
        e.preventDefault();
        

        const email= e.target.email.value;
        const password=e.target.password.value;
        
        const regexEmail = 
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email==='' || password===''){
            console.log("Los campos no pueden estar vacios")
            return
        }
        if(!regexEmail.test(email)){
            console.log("Debes escribir una direccion de correo electronico valida.")
            return
        }

        if(email!=="challenge@alkemy.org"||password!== "react"){
            console.log("Credenciales invalidas");
            return;
        }

        console.log("La informacion esta ok")

        axios
            .post('http://challenge-react.alkemy.org',{email,password})
            .then(res => {
                console.log(res.data)
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