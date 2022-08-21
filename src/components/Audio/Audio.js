import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import ReactHowler from "react-howler";
import "./Audio.css";

const Audio = () => {
  const [option, setOption] = useState(false);

  return (
    <>
      <ReactHowler
        src="https://www.televisiontunes.com/uploads/audio/Rick%20and%20Morty.mp3"
        playing={option}
        loop
      />
      <FontAwesomeIcon
        onClick={() => setOption(!option)}
        className="audio-play"
        icon={option ? faPause : faPlay}
      />
    </>
  );
};

export default Audio;
