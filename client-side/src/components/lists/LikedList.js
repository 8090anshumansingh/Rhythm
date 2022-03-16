import React, { useState, useEffect, useRef } from "react";
import axios from "../../axios.js";
import "../../styles/likedlist.css";
import SearchIcon from "@material-ui/icons/Search";
import SearchNavbar from "../Navbars/SearchNavbar.js";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LowerBar from "../lowerBar/LowerBar.js";
import Bar from "../search/Bar.js";
import * as ReactBootStrap from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TablePagination from "@material-ui/core/TablePagination";
import {useParams} from "react-router-dom";
import liked from "../../assets/liked.png";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function LikedList () {
  const [songs, setSongs] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState([false]);
  const myRef = useRef(null);
  const songRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const playScroll = () => scrollToRef(songRef);

  const [loading, setLoading] = useState(false);

  const [artistOptions, setArtistOptions] = useState([
    {
      name: "Ed Sheeran",
      tick: false,
    },
    {
      name: "Lord Huron",
      tick: false,
    },
    {
      name: "Linkin Park",
      tick: false,
    },
    {
      name: "Green Day",
      tick: false,
    },
    {
      name: "Darshan Raval",
      tick: false,
    },
    {
      name: "The Chainsmokers",
      tick: false,
    },
    {
      name: "Coldplay",
      tick: false,
    },
    {
      name: "Charlie Puth",
      tick: false,
    },
    {
      name: "Arijit Singh",
      tick: false,
    },
    {
      name: "Bruno Mars",
      tick: false,
    },
    {
      name: "Alan Walker",
      tick: false,
    },
    {
      name: "Band of Horses",
      tick: false,
    },
    {
      name: "Fort Atlantic",
      tick: false,
    },
  ]);
  const [filter, setFilter] = useState({
    artists: [],
  });

  // const [userId, setUserId]= useState("");
const params= useParams();
// console.log(params.userId);
// setUserId(params.userId);

const [likedTracks,setLikedTracks]= useState([]);

  useEffect(() => {
    const fetchAllSongs = async () => {
      try {
        const res= await axios.post("/getSongFromId",{userId:params.userId});
        // console.log(res.data[0].tracks);
        var newTracks = [];
        res.data.map((t) => {
          var newT = {
            id: t.id,
            title: t.title,
            artist: t.artist,
            album: t.album,
            duration: t.duration,
            image: t.image,
            audio: t.preview_url,
            isPlaying: false,
            
          };
          if (t.preview_url !== null) newTracks.push(newT);
        });
        // newTracks = [...new Set(newTracks)];
        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });

          setAllSongs((prev) => {
            return [...prev, n];
          });

          
        });
        setLoading(true);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAllSongs();
  }, []);

  const [sendTrack, setSendTrack] = useState(null);

  const playAudio = (index) => {
    executeScroll();
    if (songs[index].isPlaying === true) {
    } else {
      setSendTrack(songs[index]);
    }
  };

  const playingHandler = (title1, album1) => {
    executeScroll();
    setSongs((prev) => {
      return prev.map((p, i) =>
        p.title !== title1 || (p.album !== album1 && p.isPlaying === true)
          ? { ...p, isPlaying: false }
          : p
      );
    });

    setSongs((prev) => {
      return prev.map((p) =>
        p.title === title1 && p.album === album1 ? { ...p, isPlaying: true } : p
      );
    });
  };
  const pausingHandler = (title1, album1) => {
    setSongs((prev) => {
      return prev.map((p) =>
        p.title === title1 && p.album === album1
          ? { ...p, isPlaying: false }
          : p
      );
    });
  };

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  const [allChecked, setAllChecked] = useState(true);

  const allChangeHandler = (event) => {
    setPage(0);
    setSelected(null);
    if (event.target.checked === true) {
      setAllChecked(true);
      setArtistOptions((prev) => {
        return prev.map((li) =>
          li.tick === true ? { ...li, tick: false } : li
        );
      });
      setFilter((prev) => {
        prev.artists = [];
        return prev;
      });
    }
  };

  const artistChangeHandler = (event) => {
    setPage(0);
    setSelected(null);
    setAllChecked(false);
    const value = event.target.value;
    const curr = filter.artists;
    if (event.target.checked === true) {
      setArtistOptions((prevState) => {
        return prevState.map((li) =>
          li.name === value ? { ...li, tick: true } : li
        );
      });
      curr.push(value);
      setFilter((prev) => {
        prev.artists = curr;
        return prev;
      });
    } else {
      setArtistOptions((prevState) => {
        return prevState.map((li) =>
          li.name === value ? { ...li, tick: false } : li
        );
      });

      const ind = curr.indexOf(value);
      curr.splice(ind, 1);
      setFilter((prev) => {
        prev.artists = curr;
        return prev;
      });
    }
  };
  const [selected, setSelected] = useState(null);

  const searchSelectHandler = (value) => {
    
    setSelected(value);
  };

  const searchButtonHandler = () => {
    setPage(0);
    var current = allSongs.filter((s) => s.title === selected);

    setAllChecked(false);

    setFilter((prev) => {
      prev.artists = [];
      return prev;
    });

    setArtistOptions((prev) => {
      return prev.map((li) => (li.tick === true ? { ...li, tick: false } : li));
    });

    // console.log(current);
    setSongs(current);
  };

  useEffect(() => {
    if (selected !== null) {
      return;
    }
    if (filter.artists.length === 0) {
      setAllChecked(true);
      setSongs(allSongs);
    } else {
      var currentSongs = allSongs.filter((s) =>
        filter.artists.includes(s.artist)
      );
      setSongs(currentSongs);
    }
  }, [filter, artistOptions]);

  ///////////////////////////////////pagination //////////////////////////////
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    playScroll();
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
/////////////////////////////////////////////////////like song///////////////////////////////////////
    

  const likeHandler = async (id) => {
    // console.log(id);
    

      try {
        const res = await axios.post("/dislikeSong", { id: id,userId:params.userId });
        console.log(res.data);
        setSongs((prev)=>{
          var newtemp=prev;
            var tt= newtemp.filter((p)=> p.id!=id);
            return(tt);
         
        });
        setAllSongs((prev)=>{
        
          var newtemp=prev;
            var tt= newtemp.filter((p)=> p.id!=id);
            return(tt);
        
       });
      } catch (e) {
        console.log(e);
      } 
     
      
    
  
    
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const dotsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  var section1Style = {
   
    backgroundImage: "url(" + liked + ")",
  height: "550px",


  backgroundPosition: "center",
  backgroundRepeat:"no-repeat",
  backgroundSize: "cover",
  

};

  return (
    <React.Fragment>
      <SearchNavbar />

      <div className="search">
        <div className="section1" style={section1Style}>
          <div className="search__box" ref={songRef}>
            <SearchIcon />
            <Bar songs={allSongs} onSelect={searchSelectHandler} />
            <button onClick={searchButtonHandler}>Search</button>
          </div>
        </div>

        <div className="section2">
          <div className="left">
            <div className="filter-section">
              <h5 style={{color:"white"}}>Artists</h5>
              <div className="artistBox">
                <GreenCheckbox
                  onChange={allChangeHandler}
                  value="All"
                  checked={allChecked}
                />
                <label htmlFor="loc" className="para">
                  All
                </label>
              </div>
              {artistOptions.map((a) => (
                <div className="artistBox">
                  <GreenCheckbox
                    checked={a.tick}
                    onChange={artistChangeHandler}
                    value={a.name}
                  />
                  <label htmlFor="loc" className="para">
                    {a.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="right">
            <table className="boxes">
              <tr>
                <th>#</th>
                <th>Play</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Like</th>
                <th>
                  <QueryBuilderIcon />
                </th>
              </tr>
              {loading ? (
                songs
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((s, i) => (
                    <tr className={"rows " + (s.isPlaying && "playing-box")}>
                      <td>{i + page * rowsPerPage + 1}</td>
                      {!s.isPlaying ? (
                        <td>
                          <PlayArrowIcon
                            onClick={() => {
                              playAudio(i + page * rowsPerPage);
                            }}
                            style={{ color: "white" ,cursor:"pointer"}}
                          />
                        </td>
                      ) : (
                        <td>
                          <img
                            src="https://open.scdn.co/cdn/images/equaliser-animated-green.73b73928.gif"
                            style={{ backgroundColor: "#161616" }}
                          />
                        </td>
                      )}
                      <td>
                        <img src={s.image} width="50" height="40" />
                        {s.title.substr(0, 30) +
                          (s.title.length > 30 ? "..." : "")}
                      </td>
                      <td>
                        {s.artist.substr(0, 30) +
                          (s.artist.length > 30 ? "..." : "")}
                      </td>
                      <td>
                        {s.album.substr(0, 30) +
                          (s.album.length > 30 ? "..." : "")}
                      </td>
                      <td>
                        <FavoriteIcon
                          style={{color:"#1db954",cursor:"pointer"}}
                          onClick={()=>likeHandler(s.id)}
                        />
                      </td>
                      <td><MoreHorizIcon style={{color:"white",cursor:"pointer"}} onClick={dotsClick}/></td>
                    </tr>
                  ))
              ) : (
                <div className="spinner">
                  <ReactBootStrap.Spinner animation="border" variant="light" />
                </div>
              )}
            </table>
            <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Add to custom playlist</MenuItem>
       
      </Menu>
            <div className="pagination-section">
              <TablePagination
                component="div"
                count={songs.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          </div>
        </div>
        <div ref={myRef}>
          {sendTrack !== null && (
            <div className="section3">
              <LowerBar
                key={sendTrack.album}
                title={sendTrack.title}
                artist={sendTrack.artist}
                image={sendTrack.image}
                audio={sendTrack.audio}
                album={sendTrack.album}
                onPlaying={playingHandler}
                onPausing={pausingHandler}
              />
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  ); 

   
   

};

export default LikedList;