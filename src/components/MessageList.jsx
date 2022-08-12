import { useState, useEffect } from 'react'
import MessageCard from "./MessageCard.jsx"

const MessageList = ()=>{
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('https://us-central1-message-app-project-121c5.cloudfunctions.net/api/messages')
        .then(response => response.json())
        .then(data => setMessages(data))
    }, []);

    return(

        <ul>
            {
                messages.map((message, index) => (
                    <li key={index}>
                        <MessageCard message={message}/>
                    </li>
                ))
            }
            
        </ul>

    )
}

export default MessageList