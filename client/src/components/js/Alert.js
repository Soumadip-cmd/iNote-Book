import React from 'react';
import "../css/Alert.css"

const Alert = (props) => {
    const { alert } = props;
    
    
    return (
        <>
        <div style={{height:`55px`}} >
        
            {alert && (
                <div className={`alert alert-${alert.type} alert-dismissible fade show `} role="alert">
                    <strong id='caps'>{(alert.type[0].toUpperCase() + alert.type.slice(1))}: </strong>
                    {alert.msg}.
                    
                </div>
            )}
            </div>
        </>
    );
};

export default Alert;
