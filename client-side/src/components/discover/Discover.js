import "../../styles/discover.css";
import React, { useEffect,useState } from "react";
import axios from "../../axios.js";
import {useParams} from "react-router-dom";
import SearchNavbar from "../Navbars/SearchNavbar.js";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import PeopleBar from "../peopleBar/PeopleBar.js";
import * as ReactBootStrap from "react-bootstrap";
import { ImCross } from "react-icons/im";
import Table from 'react-bootstrap/Table';
import { FaUpload } from "react-icons/fa";
// import ProfileTable from  '../profileTable/ProfileTable';
// import Card from 'react-bootstrap/Card'
import Cards from "../cards/Cards.js";
import Axios from "axios";

function Discover(props) {
    const history = useHistory();
    const params= useParams();
    const [likedArtists,setLikedArtists]= useState([]);
    const [users,setUsers]= useState([]);
    const [allUsers,setAllUsers]= useState([]);
    const [friends,setFriends]=useState([]);
    const [posters,setPosters]=useState([]);
    const [currentUser,setCurrentUser]=useState(null);
    // const [cards,setCards]=useState([
    //     {
    //         name:"",
    //         match:[],
    //     }
    // ]);

    const [load,setLoad]=useState(false);

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
            //    console.log(res.data);
            setUsers(res.data);
            setAllUsers(res.data);
            
           } catch (error) {
               console.log(error);
           }
       } 

       const getFriends=async ()=>{
           try {
           
               const res=await axios.get("/getFriends/"+params.userId);
            //    console.log(res.data);
               setFriends(res.data);
              
           } catch (error) {
               console.log(error);
           }
       }

       const getPosters=async()=>{
           try {
               const res=await axios.get("/getPosters/"+params.userId);
               setPosters(res.data);
           } catch (error) {
               console.log(error);
           }
       }

       const getCurrentUser=async()=>{
        try {
            const res=await axios.post("/getUserFromId",{userId:params.userId});
            // console.log(res.data);
            setCurrentUser(res.data);
        } catch (error) {
            console.log(error);
        }
    }

       setLoad(true);

       getArtists();
       getUsersWithArtists();
       getFriends();
       getPosters();
       getCurrentUser();
    },[]);

    const connectClickHandler=async(e,id)=>{
        e.preventDefault();
       try {
           const res=await axios.post("/createConversation",{senderId:params.userId,receiverId:id});
           history.push("/chat/"+params.userId);

       } catch (error) {
           console.log(error);
       }
    }

    const [selected, setSelected] = useState(null);

    const searchSelectHandler = (value) => {
    
        setSelected(value);
      };
    
      const searchButtonHandler = () => {
        // setPage(0);
         var current = users.filter((s) => s.name === selected);
        // console.log(current);
        setUsers(current);
      };
     
      const handleKeypress = (e) => {
        //it triggers by pressing the enter key
    
        if (e.key === "Enter") {
            searchButtonHandler();
        }
      };

      const crossHandler=()=>{
          setUsers(allUsers);
          setSelected(null);
      }
  const [imageSelected,setImageSelected]=useState("");
  const [dp,setDp]=useState("");
      const handleFileChange=(e)=>{
        //   console.log(e.target.files);
        setImageSelected(e.target.files[0]);
      }

      const fileClickHandler= async()=>{
          const formData=new FormData();
          formData.append("file",imageSelected);
          formData.append("upload_preset","ppmdkdy3");
          try {
              const res=await Axios.post("https://api.cloudinary.com/v1_1/dt2toewms/image/upload",formData);
              const res1=await axios.post("/setDp",{userId:params.userId,url:res.data.url});
                setCurrentUser((prev)=>{
                    return {...prev,dp:res1.data.dp};
                })
          } catch (error) {
              console.log(error);
          }
      }

      
    return (
        <React.Fragment>
        <SearchNavbar/>


           <div className="discover">
               <div className="people">
                   <h5 style={{color:"white",marginTop:"10px"}}>People you may like...</h5>
                   <div className="peopleSearch">
                      <div onKeyPress={handleKeypress} className="people_SearchBox" >
                       <SearchIcon style={{color:"white"}}/>
                       <PeopleBar users={users} onSelect={searchSelectHandler} onKeyPress={handleKeypress}/>
                       <ImCross onClick={crossHandler} style={{cursor:"pointer",color:"white", marginLeft:"-100px",zIndex:"1"}}/>
                       <button onKeyPress={handleKeypress} onClick={searchButtonHandler}>Search</button>
                     </div>
                   </div>
                      <div className="peopleWrapper">
                            {users.length ? (users.map((c)=>(
                               <> {c.id!==params.userId && !friends.includes(c.id) &&  <div className="card">
                                   <div className="upperCard">
                                        <p>{c.name}</p>
                                        <Button variant="success" size="sm" onClick={(e)=>connectClickHandler(e,c.id)}>Connect</Button>
                                   </div>
                                   <div className="lowerCard">
                                   {c.artists?.slice(0,5).map((m)=>(
                                       <> {likedArtists?.includes(m) && <div className="matchArray"> <span>{m}</span>  </div> }
                                         </>
                                     
                                     ))}

                                   </div>
                                    
                                   
                                </div>} </>
                            ))) : (
                                <div className="spinner">
                             
                                  <ReactBootStrap.Spinner style={{marginLeft:"-300px", color:"white"}}animation="border" variant="success" />
                                </div>
                              )}   
                      </div>
               </div>

               <div className='profile'>
                  
                  <div className="profileTop">
                    <div className='profile_left'>
                         <div className="profileImg">
                             <img className="profilePic" alt="profile pic" src={currentUser?.dp}></img>                             
                            <input type="file" onChange={handleFileChange} style={{color:"white",margin:"10px"}}/>
                            <Button variant="success" size="sm" className="profilepicButton" onClick={fileClickHandler}>Upload</Button>
                            {/* <button onClick={fileClickHandler}>Upload</button> */}
                         </div>
                    </div>
                     <div className='profile_right'>
                     <Table borderless hover  className="profileTable">
                   
                 <tbody>
                   <tr  > 
                     <td >Name</td>
                     <td>{currentUser?.name}</td>
                  </tr>
                  <tr > 
                     <td>Email</td>
                     <td>{currentUser?.email}</td>
                  </tr>
                  <tr > 
                     <td>Friends</td>
                     <td>{friends?.length}</td>
                  </tr>
                  <tr > 
                     <td>Liked Songs</td>
                     <td>{currentUser?.likedSongs.length}</td>
                  </tr>
                  <tr > 
                     <td>Favorite Artists</td>
                     <p>{likedArtists.slice(0,4).toString()}</p>
                     {/* {likedArtists.slice(0,3).map((l)=>(
                         l.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                     ))} */}
                  </tr>
                   
                 
               </tbody>
              </Table> 
                    </div>
                  </div>

                  <div className="profileBottom">
                          <h1 style={{color:"white",fontSize:"3.5rem"}}>Your Top Picks</h1>
                           <div className="topPicks">

                               <div className="topPicksRow1">
                               {posters.slice(0,6).map((p)=>(
                                      <Cards image={p.image} artist={p.artist} title={p.title}/>
                               ))}
                               </div>
                               <div className="topPicksRow2">
                               {posters.slice(6,12).map((p)=>(
                                      <Cards image={p.image} artist={p.artist} title={p.title}/>
                               ))}
                               </div>
                              
                          
                        
                           </div>
                  </div>


              </div>
            
           </div>
        </React.Fragment>
    );
}

export default Discover;