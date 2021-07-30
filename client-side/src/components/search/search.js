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
  const [allSongs, setAllSongs] = useState([]);
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
          if (t.preview_url !== null) newTracks.push(newT);
        });
        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });
        });
      } catch (e) {
        console.log(e);
      }
    };

    const fetchHindiSongs = async () => {
      try {
        const res = await axios.get("/allSongs/hindiSongs");
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
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });
        });
      } catch (e) {
        console.log(e);
      }
    };
    const fetchHimymSongs = async () => {
      try {
        const res = await axios.get("/allSongs/himym");
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
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });
        });
      } catch (e) {
        console.log(e);
      }
    };
    const fetchSheeranSongs = async () => {
      try {
        const res = await axios.get("/allSongs/sheeran");
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
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });
        });
      } catch (e) {
        console.log(e);
      }
    };
    const fetchKKSongs = async () => {
      try {
        const res = await axios.get("/allSongs/kk");
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
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });
        });
      } catch (e) {
        console.log(e);
      }
    };
    const fetchTwilightSongs = async () => {
      try {
        const res = await axios.get("/allSongs/twilight");
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
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });
        });
      } catch (e) {
        console.log(e);
      }
    };
    const fetchDarshanSongs = async () => {
      try {
        const res = await axios.get("/allSongs/darshan");
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
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });
        });
      } catch (e) {
        console.log(e);
      }
    };
    const fetchRecommendedSongs = async () => {
      try {
        const res = await axios.get("/allSongs/recommends");
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
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });
        });
      } catch (e) {
        console.log(e);
      }
    };
    const fetchMix1Songs = async () => {
      try {
        const res = await axios.get("/allSongs/mix1");
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
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });
        });
      } catch (e) {
        console.log(e);
      }
    };
    const fetchMix3Songs = async () => {
      try {
        const res = await axios.get("/allSongs/mix3");
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
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });
        });
      } catch (e) {
        console.log(e);
      }
    };
    const fetchMix5Songs = async () => {
      try {
        const res = await axios.get("/allSongs/mix5");
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
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });
        });
      } catch (e) {
        console.log(e);
      }
    };
    const fetchDecadeSongs = async () => {
      try {
        const res = await axios.get("/allSongs/decadeBest");
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
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });
        });
      } catch (e) {
        console.log(e);
      }
    };
    const fetchYearSongs = async () => {
      try {
        const res = await axios.get("/allSongs/yearBest");
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
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });
        });
      } catch (e) {
        console.log(e);
      }
    };

    fetchSongs();
    fetchSheeranSongs();
    fetchHimymSongs();
    fetchTwilightSongs();
    fetchDarshanSongs();
    fetchRecommendedSongs();
    fetchMix1Songs();
    fetchMix3Songs();
    fetchMix5Songs();
    fetchDecadeSongs();
    fetchYearSongs();

    fetchKKSongs();
    fetchHindiSongs();
  }, []);

  // const [audio, setAudio] = useState({
  //   audio: new Audio(),
  // });

  // setSongs((prev) => {
  //   var newArray = prev;
  //   newTracks.forEach((n) => {
  //     newArray.push(n);
  //   });
  //   return newArray;
  // });

  // setSongs((prev) => {
  //   var newArray = prev;
  //   newTracks.forEach((n) => {
  //     newArray.push(n);
  //   });
  //   return newArray;
  // });
  // setSongs(newTracks);

  const playAudio = (index) => {
    if (songs[index].isPlaying === true) {
      // console.log("pause now");
      songs[index].audio.pause();
    } else {
      var stopIndex = -1;
      songs.forEach((s, i) => {
        if (s.isPlaying === true && i !== index) {
          stopIndex = i;
          return;
        }
      });

      setSongs((prev) => {
        return prev.map((p, i) =>
          i !== index && p.isPlaying === true
            ? { ...p, isPlaying: !p.isPlaying }
            : p
        );
      });

      if (stopIndex !== -1) {
        songs[stopIndex].audio.pause();
      }

      songs[index].audio.play();
    }

    setSongs((prev) => {
      return prev.map((p, i) =>
        i === index ? { ...p, isPlaying: !p.isPlaying } : p
      );
    });
  };

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

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
                <tr className={"rows " + (s.isPlaying && "playing-box")}>
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
                  <td>
                    <img src={s.image} width="50" height="40" />
                    {s.title}
                  </td>
                  <td>{s.artist}</td>
                  <td>{s.album}</td>
                  <td>
                    <FavoriteBorderIcon style={{ color: "white" }} />
                  </td>
                  <td>{millisToMinutesAndSeconds(s.duration)}</td>
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
