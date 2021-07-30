import React from "react";
import "../../styles/lowerBar.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function LowerBar(props) {
  const player = React.useRef(null);
  return (
    <div className="lowerBar">
      <img src={props?.image} width="70" height="60" />
      <p style={{ color: "white" }}>{props?.title?.substr(0, 50)}</p>
      <p style={{ color: "white" }}>{props?.artist?.substr(0, 50)}</p>
      <AudioPlayer
        src={props.audio}
        controls={true}
        autoplay
        loop
        onPlay={() => {
          props.onPlaying(props.title);
        }}
        onPause={() => {
          props.onPausing(props.title);
        }}
        onCanPlay={() => {
          player.current.audio.current.play();
        }}
        ref={player}
      />
    </div>
  );
}

export default LowerBar;
