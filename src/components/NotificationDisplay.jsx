import { useContext } from "react";
import { NotificationContext } from '../context/NotificationContext';



function NotificationDisplay(){
    const {notification, clearNotification} = useContext(NotificationContext);

    if(!notification) return null;

    let bgColor = '';
    if(notification.type === 'success'){
        bgColor = 'bg-green-500';
    }else if(notification.type === 'error'){
        bgColor = 'bg-red-500';
    }else if(notification.type === 'info'){
        bgColor = 'bg-blue-500';
    }

    return (
    <div className={`${bgColor} text-white p-4 fixed top-0 left-0 right-0 flex justify-between items-center`}>
      <span>{notification.message}</span>
      <button onClick={clearNotification} className="ml-4 font-bold">
        ✕
      </button>
    </div>
  );

}


export default NotificationDisplay;