import React from "react";
import "../../styles/lowerBar.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function LowerBar(props) {
  return (
    <div className="lowerBar">
      <p style={{ color: "white" }}>song</p>
      <p style={{ color: "white" }}>artist</p>
      <AudioPlayer />
    </div>
  );
}

export default LowerBar;
