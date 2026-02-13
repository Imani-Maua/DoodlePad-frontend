import { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ( {children}) => {

    const [notification, setNotification] = useState(null);

    const showNotification = (message, type) => {
        setNotification({message, type});

        setTimeout(()=> {
            setNotification(null)
        }, 3000);
    };

    const clearNotification = () => {
        setNotification(null);
    }

    return(
        <NotificationContext.Provider value={{notification, showNotification, clearNotification}}>
            {children}
        </NotificationContext.Provider>
    )
}