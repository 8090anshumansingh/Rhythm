import React, { useState, useEffect,useRef } from "react";
import "../../styles/messenger.css";
import SearchNavbar from "../Navbars/SearchNavbar.js";
import Conversation from "../conversations/Conversation.js";
import Message from "../message/Message.js";
import ChatOnline from "../chatOnline/ChatOnline.js";
import axios from "../../axios.js";
import {useParams} from "react-router-dom";
import io from "socket.io-client";

function Messenger() {
  const params= useParams();

  const [conversations,setConversations]=useState([]);
  const [currentChat, setCurrentChat]= useState(null);
  const [messages, setMessages]= useState([]);
  const [newMessage, setNewMessage]= useState("");
  const [arrivalMessage,setArrivalMessage]= useState(null);
  const socket= useRef();
  const scrollRef= useRef();


// useEffect(()=>{
//    socket?.on("welcome",message=>{
//      console.log(message);
//    })
// },[socket])

useEffect(()=>{
 socket.current=io("ws://localhost:8900");
 socket.current.on("getMessage",data=>{
    setArrivalMessage({
      sender:data.senderId,
      text:data.text,
      createdAt:Date.now(),
    });
 });
},[]);

useEffect(()=>{
  arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && 
  setMessages((prev)=>[...prev,arrivalMessage]);
},[arrivalMessage,currentChat]);

useEffect(()=>{
socket.current.emit("addUser",params.userId);
socket.current.on("getUsers",users=>{
  console.log(users);
})
},[params.userId]);


  useEffect(()=>{
    const getConversations=async()=>{
      try {
       
        const res=await axios.get("/getConversationFromUser/" + params.userId);
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  },[params.userId]);

  useEffect(()=>{
   const getMessages=async()=>{
           try {
             const res= await axios.get("/getMessageFromConversation/"+currentChat?._id);
             setMessages(res.data);
           
           } catch (error) {
             console.log(error);
           }
   };
   getMessages();
  },[currentChat]);
  // console.log(messages);

  useEffect(()=>{
    scrollRef.current?.scrollIntoView({behavior:"smooth"});
  },[messages]);

  const handleSendSubmit=async(e)=>{
       e.preventDefault();
       const message={
         sender:params.userId,
         text:newMessage,
         conversationId:currentChat._id,
       };
          
       const receiverId=currentChat.members.find((member)=>member!==params.userId);

       socket.current.emit("sendMessage",{
         senderId:params.userId,
         receiverId,
         text:newMessage,
       });


       try {
         const res=await axios.post("/createMessage",message);
         setMessages([...messages,res.data]);
         setNewMessage("");
       } catch (error) {
         console.log(error);
       }
  }
  


    return (
        <React.Fragment>
      <SearchNavbar/>
          

        <div className="messenger">
             <div className='chatMenu'>
                    <div className="chatMenuWrapper">
                        <input placeholder='Search for friends' className='chatMenuInput'/>
                        {conversations.map((c)=>(
                          <div onClick={()=>setCurrentChat(c)}>
                                <Conversation conversation={c} currentUser={params.userId}/>
                          </div>
                            
                        ))}
                   </div>
             </div>
             <div className='chatBox'>
                <div className="chatBoxWrapper">
                {currentChat? <>
                    <div className='chatBoxTop'>
                      
                              {messages.map((m)=>(
                                 <div ref={scrollRef}>
                               <Message message={m} own={m.sender===params.userId}/>
                               </div>
                               ))}
                    </div>
                    <div className='chatBoxBottom'>
                      <textarea
                         className="chatMessageInput"
                         placeholder="write something..."
                         onChange={(e)=>setNewMessage(e.target.value)}
                         value={newMessage}
                       ></textarea>
                      <button className="chatSubmitButton" onClick={handleSendSubmit}>
                         Send
                      </button>

                    </div> </>: <span className="noConversationText">Open a conversation to start a chat</span>  }
                    
                </div>
             </div>

             <div className='chatOnline'>
                       <div className='chatOnlineWrapper'>
                       <ChatOnline/>
                       <ChatOnline/>
                       <ChatOnline/>
                       <ChatOnline/>
                       </div>
                    </div>
            
        </div>

        </React.Fragment>
       
    );
}

export default Messenger;