import React, { useState, useEffect,useRef } from "react";
import "../../styles/messenger.css";
import SearchNavbar from "../Navbars/SearchNavbar.js";
import Conversation from "../conversations/Conversation.js";
import Message from "../message/Message.js";
import ChatOnline from "../chatOnline/ChatOnline.js";
import axios from "../../axios.js";
import {useParams} from "react-router-dom";
import io from "socket.io-client";
import { RiSendPlaneFill } from "react-icons/ri";
// import { getFriends } from "../../../../server-side/controllers/user.controllers";


function Messenger() {
  const params= useParams();

  const [conversations,setConversations]=useState([]);
  const [currentChat, setCurrentChat]= useState(null);
  const [messages, setMessages]= useState([]);
  const [newMessage, setNewMessage]= useState("");
  const [arrivalMessage,setArrivalMessage]= useState(null);
  const [onlineUsers,setOnlineUsers]=useState([]);
  const [friends,setFriends]=useState([]);
  const socket= useRef();
  const scrollRef= useRef();


// useEffect(()=>{
//    socket?.on("welcome",message=>{
//      console.log(message);
//    })
// },[socket])

useEffect(()=>{
 socket.current=io("https://socket-rhythm.herokuapp.com");
 socket.current.on("getMessage",data=>{
    setArrivalMessage({
      sender:data.senderId,
      text:data.text,
      createdAt:Date.now(),
    });
 });

//  const getFriends=async()=>{
//    try {
//      const res=await axios.get("/getFriends/"+params.userId);
//      setFriends(res.data);
//    } catch (error) {
//      console.log(error);
//    }
//  }

//  getFriends();
},[]);

useEffect(()=>{
  arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && 
  setMessages((prev)=>[...prev,arrivalMessage]);
},[arrivalMessage,currentChat]);

useEffect(()=>{
socket.current.emit("addUser",params.userId);
socket.current.on("getUsers",users=>{
  // console.log(users);
  var tt=[];
  users.forEach((f)=>{
    if(f.userId!==params.userId)
    tt.push(f.userId);
  })
  setOnlineUsers(tt);
})
},[params.userId,friends]);


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
                      <h3 style={{color:"white"}}>Your Connections</h3>
                        {/* <input placeholder='Search for friends' className='chatMenuInput'/> */}
                       {conversations.length>0 ? <><div> {conversations.map((c)=>(
                          <div onClick={()=>setCurrentChat(c)} className="conversationBox">
                                <Conversation conversation={c} currentUser={params.userId}/>
                          </div>
                            
                        ))}  </div></>: <h5 style={{color:"grey",marginTop:"200px",marginLeft:"100px"}}>No Connections</h5>}
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
                       <RiSendPlaneFill className="chatSubmitButton" onClick={handleSendSubmit}/>
                     

                    </div> </>: <span className="noConversationText">Open a conversation to start a chat</span>  }
                    
                </div>
             </div>

                    <div className='chatOnline'>
                      <h3 style={{color:"white",margin:"10px"}}>Online Connections</h3>
                       <div className='chatOnlineWrapper'>
                       <ChatOnline onlineUsers={onlineUsers} currentId={params.userId} setCurrentChat={setCurrentChat}/>
                      
                       </div>
                    </div>
            
        </div>

        </React.Fragment>
       
    );
}

export default Messenger;