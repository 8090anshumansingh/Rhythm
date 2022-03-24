import React, { useState, useEffect } from "react";
import "../../styles/messenger.css";
import SearchNavbar from "../Navbars/SearchNavbar.js";
import Conversation from "../conversations/Conversation.js";
import Message from "../message/Message.js";
import ChatOnline from "../chatOnline/ChatOnline.js";
import axios from "../../axios.js";
import {useParams} from "react-router-dom";

function Messenger() {
  const params= useParams();

  const [conversations,setConversations]=useState([]);

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


    return (
        <React.Fragment>
      <SearchNavbar/>
          

        <div className="messenger">
             <div className='chatMenu'>
                    <div className="chatMenuWrapper">
                        <input placeholder='Search for friends' className='chatMenuInput'/>
                        {conversations.map((c)=>(
                             <Conversation conversation={c} currentUser={params.userId}/>
                        ))}
                   </div>
             </div>
             <div className='chatBox'>
                <div className="chatBoxWrapper">
                    <div className='chatBoxTop'>
                        <Message/>
                        <Message own="true"/>
                        <Message/>
                        <Message own="true"/>
                        <Message/>
                        <Message own="true"/>
                        <Message/>
                        <Message own="true"/>
                        <Message/>
                        <Message own="true"/>
                        <Message/>
                        <Message own="true"/>

                    </div>
                    <div className='chatBoxBottom'>
                      <textarea
                         className="chatMessageInput"
                         placeholder="write something..."
                       ></textarea>
                      <button className="chatSubmitButton" >
                         Send
                      </button>

                    </div>
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