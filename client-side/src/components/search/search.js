import React, { useState, useEffect, useRef } from "react";
import axios from "../../axios.js";
import "../../styles/search.css";
import SearchIcon from "@material-ui/icons/Search";
import Navbar from "../Navbars/Navbar.js";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PauseIcon from "@material-ui/icons/Pause";
import LowerBar from "../lowerBar/LowerBar.js";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
function Search() {
  const [songs, setSongs] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState([false]);
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

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
  ]);
  const [filter, setFilter] = useState({
    artists: [],
  });

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
            audio: t.preview_url,
            isPlaying: false,
          };
          if (t.preview_url !== null) newTracks.push(newT);
        });
        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });

          setAllSongs((prev) => {
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
            audio: t.preview_url,
            isPlaying: false,
          };
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });

          setAllSongs((prev) => {
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
            audio: t.preview_url,
            isPlaying: false,
          };
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });

          setAllSongs((prev) => {
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
            audio: t.preview_url,
            isPlaying: false,
          };
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });

          setAllSongs((prev) => {
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
            audio: t.preview_url,
            isPlaying: false,
          };
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });

          setAllSongs((prev) => {
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
            audio: t.preview_url,
            isPlaying: false,
          };
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });

          setAllSongs((prev) => {
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
            audio: t.preview_url,
            isPlaying: false,
          };
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });

          setAllSongs((prev) => {
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
            audio: t.preview_url,
            isPlaying: false,
          };
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });

          setAllSongs((prev) => {
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
            audio: t.preview_url,
            isPlaying: false,
          };
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });

          setAllSongs((prev) => {
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
            audio: t.preview_url,
            isPlaying: false,
          };
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });

          setAllSongs((prev) => {
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
            audio: t.preview_url,
            isPlaying: false,
          };
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });

          setAllSongs((prev) => {
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
            audio: t.preview_url,
            isPlaying: false,
          };
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });

          setAllSongs((prev) => {
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
            audio: t.preview_url,
            isPlaying: false,
          };
          if (t.preview_url !== null) newTracks.push(newT);
        });

        newTracks.forEach((n) => {
          setSongs((prev) => {
            return [...prev, n];
          });

          setAllSongs((prev) => {
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

  const [sendTrack, setSendTrack] = useState(null);

  const playAudio = (index) => {
    executeScroll();
    if (songs[index].isPlaying === true) {
      // songs[index].audio.pause();
    } else {
      setSendTrack(songs[index]);

      // var stopIndex = -1;
      // songs.forEach((s, i) => {
      //   if (s.isPlaying === true && i !== index) {
      //     stopIndex = i;
      //     return;
      //   }
      // });
      //
      // setSongs((prev) => {
      //   return prev.map((p, i) =>
      //     i !== index && p.isPlaying === true
      //       ? { ...p, isPlaying: !p.isPlaying }
      //       : p
      //   );
      // });

      // if (stopIndex !== -1) {
      //   // songs[stopIndex].audio.pause();
      // }

      // songs[index].audio.play();
    }

    // setSongs((prev) => {
    //   return prev.map((p, i) =>
    //     i === index ? { ...p, isPlaying: !p.isPlaying } : p
    //   );
    // });
  };

  const playingHandler = (title1) => {
    setSongs((prev) => {
      return prev.map((p, i) =>
        p.title !== title1 && p.isPlaying === true
          ? { ...p, isPlaying: false }
          : p
      );
    });

    setSongs((prev) => {
      return prev.map((p) =>
        p.title === title1 ? { ...p, isPlaying: true } : p
      );
    });
  };
  const pausingHandler = (title1) => {
    setSongs((prev) => {
      return prev.map((p) =>
        p.title === title1 ? { ...p, isPlaying: false } : p
      );
    });
  };

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  const artistChangeHandler = (event) => {
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

  useEffect(() => {
    if (filter.artists.length === 0) {
      setSongs(allSongs);
    } else {
      var currentSongs = allSongs.filter((s) =>
        filter.artists.includes(s.artist)
      );
      setSongs(currentSongs);
    }
  }, [filter, artistOptions]);

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
              {artistOptions.map((a) => (
                <div className="artistBox">
                  <input
                    type="checkbox"
                    onChange={artistChangeHandler}
                    value={a.name}
                    checked={a.tick}
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
                      <img
                        src="https://open.scdn.co/cdn/images/equaliser-animated-green.73b73928.gif"
                        style={{ backgroundColor: "#161616" }}
                      />
                    </td>
                  )}
                  <td>
                    <img src={s.image} width="50" height="40" />
                    {s.title.substr(0, 30) + (s.title.length > 30 ? "..." : "")}
                  </td>
                  <td>
                    {s.artist.substr(0, 30) +
                      (s.artist.length > 30 ? "..." : "")}
                  </td>
                  <td>
                    {s.album.substr(0, 30) + (s.album.length > 30 ? "..." : "")}
                  </td>
                  <td>
                    <FavoriteBorderIcon style={{ color: "white" }} />
                  </td>
                  <td>{millisToMinutesAndSeconds(s.duration)}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div ref={myRef}>
          {sendTrack !== null && (
            <div className="section3">
              <LowerBar
                key={sendTrack.title}
                title={sendTrack.title}
                artist={sendTrack.artist}
                image={sendTrack.image}
                audio={sendTrack.audio}
                onPlaying={playingHandler}
                onPausing={pausingHandler}
              />
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Search;

// <PauseIcon
//   onClick={() => {
//     playAudio(i);
//   }}
//   style={{ color: "white" }}
// />
