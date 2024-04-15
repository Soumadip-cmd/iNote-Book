import { useState } from "react";
import AlertContext from "./AlertContext";


const  AlertState=(props)=>{
    const [alert,setAlert]=useState(null)

    const showAlert=(type,message)=>{
        setAlert({
            type:type,
            msg:message
        })
        setTimeout(() => {
            setAlert(null)
        }, 1700);
    }
    
    
    return(
        <AlertContext.Provider value={{alert,showAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState