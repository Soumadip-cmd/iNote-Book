import React from 'react';

const Alert = (props) => {
    const { alert } = props;
    
    
    return (
        <>
            {alert && (
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                    <strong id='caps'>{(alert.type[0].toUpperCase() + alert.type.slice(1))}: </strong>
                    {alert.msg}.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">x</span>
                    </button>
                </div>
            )}
        </>
    );
};

export default Alert;
