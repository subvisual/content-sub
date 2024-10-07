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

  const progressBarDynamicStyle = {
    "--dynamic-gradient": `linear-gradient(to right, var(--dark-rock-800) ${currentTime / duration * 100}%, var(--soft-white-100) 0%)`,
  };

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
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div>
      <div className={styles.desktopAudioPlayer}>
        {isPlaying ? (
          <button onClick={togglePlayPause}>
            <AudioPauseButton width={'120px'} />
          </button>
        ) : (
          <button onClick={togglePlayPause}>
            <AudioPlayButton width={'120px'} />
          </button>
        )}

        {isMuted ? (<button  onClick={toggleMute}>
          <MuteIcon width={'120px'}/>
        </button>) : (
          <button  onClick={toggleMute}>
            <RaiseVolumeIcon width={'120px'}/>
          </button>)
        }

        <button  onClick={() => skip(-15)}>
          <BackFifteenIcon width={'50px'}/>
        </button>
        <div className={styles.duration}><span>{formatTime(currentTime)} / {formatTime(duration)}</span></div>
        <input
          className={styles.progressBar}
          style={progressBarDynamicStyle}
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
        <button  onClick={() => skip(15)}>
          <MoveFifteenIcon width={'50px'}/>
        </button>

      </div>
      <div className={styles.mobileAudioPlayer}>
        {isPlaying ? (
          <button className={styles.playPauseButton} onClick={togglePlayPause}>
            <AudioPauseButton width={'39px'}/>
          </button>
        ) : (
          <button className={styles.playPauseButton} onClick={togglePlayPause}>
            <AudioPlayButton width={'39px'}/>
          </button>
        )}


        <div className={styles.duration}><span>{formatTime(currentTime)} / {formatTime(duration)}</span></div>
        <input
          className={styles.progressBar}
          style={progressBarDynamicStyle}
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />


        <div className={styles.mobileButtonContainer}>
          {isMuted ? (<button className={styles.unmute} onClick={toggleMute}>
            <MuteIcon />
          </button>) : (
            <button className={styles.mute} onClick={toggleMute}>
              <RaiseVolumeIcon width={'28'}/>
            </button>)
          }

          <button className={styles.backFifteen} onClick={() => skip(-15)}>
            <BackFifteenIcon width={'20'}/>
          </button>
          <button className={styles.moveFifteen} onClick={() => skip(15)}>
            <MoveFifteenIcon width={'20'}/>
          </button>
        </div>


      </div>
    </div>
  );
}
