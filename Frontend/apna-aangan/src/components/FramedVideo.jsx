import React from "react";
import ReactPlayer from "react-player";

const FramedVideo = ({url, controls, light, color="light"}) => {
  
  return (
    <div className={`framed-videos aspect-video relative p-0.5`}>
      <img
        src={`images/frame-${color}.svg`}
        alt="frame"
        className="absolute max-w-full max-h-full min-w-full min-h-full z-[11] top-0 left-0 pointer-events-none"
      />
      <ReactPlayer 
        url={url} 
        controls={controls}
        light={light}
        width="100%"
        height="100%"
        volume={1}
        playIcon={<img src="./icons/play.svg" className="h-10"/>}
        />
    </div>
  );
};

export default FramedVideo;