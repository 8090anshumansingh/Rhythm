import React, { useState, useEffect,useRef } from "react";
import "../../styles/chatOnline.css";
import axios from "../../axios.js";
import {useParams} from "react-router-dom";


function ChatOnline({onlineUsers,currentId,setCurrentChat}) {
  const params= useParams();

  const [friends,setFriends]= useState([]);
  const [onlineFriends,setOnlineFriends]=useState([]);

  useEffect(()=>{
   const getFriendsNew=async()=>{
   const res=await axios.get("/getFriendsNew/"+currentId);
   console.log(res.data);
   setFriends(res.data);
   };

   getFriendsNew();
  },[currentId]);

  useEffect(()=>{
   setOnlineFriends(friends.filter((f)=>onlineUsers.includes(f?._id)));
  },[friends,onlineUsers]);

  // console.log(onlineUsers);

  const handleClick=async(user)=>{
    try {
      const res= await axios.get(`/findConversation/${currentId}/${user._id}`);
      setCurrentChat(res.data);
    } catch (error) {
      console.log(error);
    }
  }

    return (
        <div className="chatOnline">

       {onlineFriends.length>0 ? <> <div>
               {  onlineFriends.map((o)=>(
                 <div className="chatOnlineFriend" onClick={()=>handleClick(o)}>
                 <div className="chatOnlineImgContainer">
                   <img
                     className="chatOnlineImg"
                     src={o?.dp.length>0 ? o?.dp:"https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"}
                     alt=""
                   />
                   <div className="chatOnlineBadge"></div>
                 </div>
                 <span className="chatOnlineName">{o?.name}</span>
               </div>
             ))}
          </div> </>: <h5 style={{color:"grey",marginTop:"200px",marginLeft:"50px"}}>No online Friends</h5>}

          
        
        
      
    </div>
    );
}

export default ChatOnline;