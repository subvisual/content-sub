"use client";

import styles from './styles.module.css'
import { BackFifteenIcon, MoveFifteenIcon, PlayButton } from "@/app/_blocks/EpisodeHead/AudioPlayer/Buttons";
import { MuteIcon } from "@/app/_icons/icons";
import { useEffect, useRef, useState } from "react";
import { useEpisodeDuration } from "@/app/_utilities/useEpisodeDuration";

export default function AudioPlayer({ className, src, type }: { className: string, src: string, type: string }) {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  console.log("src is:", src);
  const audio = new Audio(src);
  const audioRef = useRef(null);

  // duration
  useEffect(() => {
    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));
    return () => {
      audio.removeEventListener("loadedmetadata", () => setDuration(audio.duration));
    };
  }, []);

  const formatTime = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const remainingSeconds = Math.floor(duration % 60);

    // Add leading zeros if necessary
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  // current time
  useEffect(() => {
    const handleTimeUpdate = () => setCurrentTime(audioRef.current.currentTime);
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, []);

  useEpisodeDuration()


  const togglePlayPause = () => {

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  return (
    <div className={styles.audioPlayer}>
      <audio ref={audioRef} src={src} />

      {isPlaying ?
        <button onClick={() => togglePlayPause()}>
          Pause
        </button> :
        <button onClick={() => togglePlayPause()}>
          Play
        </button>
      }
      <span>{formatTime(currentTime)}</span> / <span> {formatTime(duration)}</span>
      <input type="range" min={0} value={currentTime} max={duration} />

    </div>
  );
}
