import {useNavigate  } from 'react-router-dom'
import {useEffect  } from 'react'

const Listado = () =>{
    const navigate = useNavigate ();
    
    
    useEffect(() => {
        const  token=localStorage.getItem('token')
        if(!token){
            navigate("/");
        }
    }, []);

   

    return (
        <h2>Soy el componete listado</h2>
    )
}

export default Listado