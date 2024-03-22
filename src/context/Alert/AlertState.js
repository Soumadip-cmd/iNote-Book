import { useState } from "react";
import AlertContext from "./AlertContext";


const  AlertState=(props)=>{
    const [alert,setAlert]=useState(null)

    const showAlert=(type,message)=>{
        setAlert({
            type:type,
            msg:message
        })
    }
    
    
    return(
        <AlertContext.Provider value={{alert,showAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState