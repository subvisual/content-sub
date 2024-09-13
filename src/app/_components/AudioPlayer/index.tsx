"use client";

import React, { useEffect, useState } from "react";

const AudioPlayer: React.FC<{ src: string; type: string }> = ({ src, type }) => {
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    const audio = new Audio(src);

    // Set the audio duration when metadata is loaded
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    // Cleanup event listener on component unmount
    return () => {
      audio.removeEventListener("loadedmetadata", () => {});
    };
  }, [src]);

  return (
    <div>
      <audio controls>
        <source src={src} type={type} />
        Your browser does not support the audio element.
      </audio>
      {duration && <p>Duration: {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')} minutes</p>}
    </div>
  );
};

export default AudioPlayer;
