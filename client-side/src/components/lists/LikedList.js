import React, { useState, useEffect, useRef } from "react";
import axios from "../../axios.js";
import {useParams} from "react-router-dom";

function LikedList () {
    const params= useParams();
    const [songs,setSongs]=useState([]);
    useEffect(() => {

          const fetchSongs=async ()=>{
            try{
               const res= await axios.post("/getSongFromId",{userId:params.userId});
                //  console.log(res.data);
                 setSongs(res.data);
               
            }
            catch(e){
                  console.log(e);
            }
          }
        //    fetchIds();
          fetchSongs();
    }, []);


    return (
           <div className="likedlist">
                <h1 style={{color:"white"}}>{params.userId}</h1>
           </div>
        
    );

};

export default LikedList;