"use client";

import React from "react";

const AudioPlayer: React.FC<{ src: string; type: string }> = ({ src, type }) => {


  return (
    <div>
      <audio controls>
        <source src={src} type={type} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
