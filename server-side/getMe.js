import fs from "fs";
import SpotifyWebApi from "spotify-web-api-node";
const token =
  "BQCVHU39knqDgrSWa1QivbOs9QKlJ5a2ZRo6Nh7wEbpN7C_5owYCZwH0lyKKchRSUN7dRU_eUYFZ5fMSkpdaBdyzlW4FFFQ8xnG26iRzzrHQBDyCtskVTZGRNbV4Wos36rmHQctcCj9SJUxfbzAckOERiwb16zTxrZRMtjLbflUJB-qavCC7cr2G511RaS2MepTtPuv9enQ2TZ5gNt1gO6cpwkiDoWnvgwV8ZvvtbxXXpmv9WMsbsJ07zV4qhqL6sO4BecI1WzhnNnsQZufcZj5DXNjzr_ttLLuYhMdUQXCjB9Ec";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    // console.log(me.body);
    getUserPlaylists(me.body.id);
  })().catch((e) => {
    console.error(e);
  });
}

// GET MY PLAYLISTS
async function getUserPlaylists(userName) {
  const data = await spotifyApi.getUserPlaylists(userName);

  console.log("---------------+++++++++++++++++++++++++");
  let playlists = [];

  for (let playlist of data.body.items) {
    console.log(playlist.name + " " + playlist.id);

    let tracks = await getPlaylistTracks(playlist.id, playlist.name);
    // console.log(tracks);

    const tracksJSON = { tracks };
    let data = JSON.stringify(tracksJSON);
    // console.log("name :", data[0].name);
    // console.log("artist :", data[0].artists[0].name);
    // console.log("name :", data[0].preview_url);
    // fs.writeFileSync(playlist.name + ".json", data);
  }
}

//GET SONGS FROM PLAYLIST
async function getPlaylistTracks(playlistId, playlistName) {
  const data = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 1,
    limit: 1,
    fields: "items",
  });

  // console.log("The playlist contains these tracks", data.body);
  // console.log('The playlist contains these tracks: ', data.body.items[0].track);
  console.log("'" + playlistName + "'" + " contains these tracks:");
  let tracks = [];

  for (let track_obj of data.body.items) {
    const track = track_obj.track;
    tracks.push(track);
    console.log(track);
    // console.log(
    //   track.name + " : " + track.artists[0].name + " : " + track.preview_url
    // );
  }

  console.log("---------------+++++++++++++++++++++++++");
  return tracks;
}

getMyData();

// id: '2ysn3q6i0qcweai64wfmv7x02'
