import MessageList from "./MessageList";
import Message from "./Message";



const sample = {
    message: "ok i hope",
    author: "Derek"
  }




const MessageCard = ()=>{
    

    return(
        <>
        <div className="messageCard">
        <>
        <h2>Message: {} </h2>
        
        <h3>Author: {} </h3>


        
        </>
        </div>
        </>
    )
}

export default MessageCard;