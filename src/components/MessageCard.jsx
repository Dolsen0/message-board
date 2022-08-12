


const sample = {
    message: "ok i hope",
    author: "Derek"
  }




const MessageCard = (props)=>{
    

    return(
        <>
        <div className="messageCard">
        <>
        <h2>Message: {props.message.message} </h2>
        
        <h3>Author: {props.message.name} </h3>


        
        </>
        </div>
        </>
    )
}

export default MessageCard;