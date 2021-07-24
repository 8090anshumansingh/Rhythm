import React, { useState, useEffect } from "react";
import axios from "../../axios.js";
import "../../styles/search.css";
import SearchIcon from "@material-ui/icons/Search";
import Navbar from "../Navbars/Navbar.js";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PauseIcon from "@material-ui/icons/Pause";
function Search() {
  const [songs, setSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState([false]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get("/allSongs/lordHuron");
        // console.log(res.data);
        var newTracks = [];
        res.data.tracks.map((t) => {
          var newT = {
            title: t.title,
            artist: t.artist,
            album: t.album,
            duration: t.duration,
            image: t.image,
            audio: new Audio(t.preview_url),
            isPlaying: false,
          };
          newTracks.push(newT);
        });
        setSongs(newTracks);
      } catch (e) {
        console.log(e);
      }
    };

    fetchSongs();
  }, []);

  // const [audio, setAudio] = useState({
  //   audio: new Audio(),
  // });

  const playAudio = (index) => {
    if (songs[index].isPlaying === true) {
      console.log("pause now");
      songs[index].audio.pause();
    } else {
      songs[index].audio.play();
    }

    setSongs((prev) => {
      return prev.map((p, i) =>
        i === index ? { ...p, isPlaying: !p.isPlaying } : p
      );
    });
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="search">
        <div className="section1">
          <div className="search__box">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for artists, songs or podcasts"
            />

            <button>Search</button>
          </div>
        </div>

        <div className="section2">
          <div className="left">
            <div className="filter-section">
              <h5>Genres</h5>
              <div className="genreBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  Pop
                </label>
              </div>
              <div className="genreBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  Rock
                </label>
              </div>
              <div className="genreBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  BollyWood
                </label>
              </div>
              <div className="genreBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  k-Pop
                </label>
              </div>
            </div>
            <div className="filter-section">
              <h5>Artists</h5>
              <div className="artistBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  Ed sheeran
                </label>
              </div>
              <div className="artistBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  U2
                </label>
              </div>
              <div className="artistBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  Linkin Park
                </label>
              </div>
              <div className="artistBox">
                <input type="checkbox" id="loc" />
                <label htmlFor="loc" className="para">
                  Green Day
                </label>
              </div>
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
              {songs.map((s, i) => (
                <tr className="rows">
                  <td>{i + 1}</td>
                  {!s.isPlaying ? (
                    <td>
                      <PlayArrowIcon
                        onClick={() => {
                          playAudio(i);
                        }}
                        style={{ color: "white" }}
                      />
                    </td>
                  ) : (
                    <td>
                      <PauseIcon
                        onClick={() => {
                          playAudio(i);
                        }}
                        style={{ color: "white" }}
                      />
                    </td>
                  )}
                  <td>{s.title}</td>
                  <td>{s.artist}</td>
                  <td>{s.album}</td>
                  <td>
                    <FavoriteBorderIcon style={{ color: "white" }} />
                  </td>
                  <td>{s.duration}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Search;
