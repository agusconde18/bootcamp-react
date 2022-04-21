import {Snackbar,Alert} from '@mui/material'



const AlertasSnack = ({showMessage,setShowMessage}) =>{
    const handleClose = () => {
        setShowMessage({...showMessage, status: false})
    }


    return (
        <Snackbar open={showMessage.status} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={showMessage.type} sx={{ width: '100%' }}>
                {showMessage.message}
            </Alert>
        </Snackbar>
    )
}



export default AlertasSnack;
