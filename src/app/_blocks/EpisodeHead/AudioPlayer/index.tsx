"use client";

import styles from "./styles.module.css";
import { AudioPauseButton, AudioPlayButton, BackFifteenIcon, MoveFifteenIcon, RaiseVolumeIcon, MuteIcon } from "@/app/_blocks/EpisodeHead/AudioPlayer/Buttons";
import { useEffect, useRef, useState } from "react";
import { useEpisodeDuration } from "@/app/_utilities/useEpisodeDuration";


export default function AudioPlayer({ className, src, type }: { className: string, src: string, type: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
    const audio = audioRef.current;

    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);



  const formatTime = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const remainingSeconds = Math.floor(duration % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // slider

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const skip = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className={styles.audioPlayer}>
      {isPlaying ? (
        <button onClick={togglePlayPause}>
          <AudioPauseButton />
        </button>
      ) : (
        <button onClick={togglePlayPause}>
          <AudioPlayButton />
        </button>
      )}

      {isMuted ? (<button onClick={toggleMute}>
        <MuteIcon />
      </button> ) : (
        <button onClick={toggleMute}>
      <RaiseVolumeIcon />
    </button>)
}

      <button onClick={() => skip(-15)}>
        <BackFifteenIcon />
      </button>
      <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleSeek}
      />
      <button onClick={() => skip(15)}>
        <MoveFifteenIcon />
      </button>
    </div>
  );
}
