import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Audio(props) {
  if (props.data) {
    return (
      <div>
        <ReactAudioPlayer src={props.data} autoPlay controls />
      </div>
    );
  }
}
