import "../../styles/discover.css";
import React, { useEffect,useState } from "react";
import axios from "../../axios.js";
import {useParams} from "react-router-dom";
import SearchNavbar from "../Navbars/SearchNavbar.js";

function Discover(props) {

    const params= useParams();
    const [likedArtists,setLikedArtists]= useState([]);

    useEffect(()=>{
        const getArtists= async()=>{
           try {
               const res=await axios.get("/getLikedArtists/"+params.userId);
               setLikedArtists(res.data);
           } catch (error) {
               console.log(error);
           }
        }

       

       const getUsersWithArtists=async()=>{
           try {
               const res= await axios.get("/getUsersWithArtists");
               console.log(res.data);
           } catch (error) {
               console.log(error);
           }
       }

       getArtists();
       getUsersWithArtists();

    },[]);


    return (
        <div>
            <SearchNavbar/>
            <h1>hii</h1>
        </div>
    );
}

export default Discover;