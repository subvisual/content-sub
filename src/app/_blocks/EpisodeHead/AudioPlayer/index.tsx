"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

import {
  AudioPauseButton,
  AudioPlayButton,
  BackFifteenIcon,
  MoveFifteenIcon,
  MuteIcon,
  RaiseVolumeIcon,
} from "./ButtonIcons";
import styles from "./styles.module.css";
import formatDuration from "./Utilities/formatDuration";
import { CssVariable } from "next/dist/compiled/@next/font";

interface CSSDynamicVars {
  [key: string]: string;
}

export default function AudioPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;

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

  const togglePlayPause = () => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
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

  // Utility to generate the dynamic gradient for the progress bar
  const progressBarStyle: CSSDynamicVars = {
    "--dynamic-gradient": `linear-gradient(to right, var(--dark-rock-800) ${
      (currentTime / duration) * 100
    }%, var(--soft-white-100) 0%)`,
  };

  // Reusable Button components to reduce duplication
  const PlayPauseButton = ({ className, width }: { className?: string; width?: string }) => (
    <button className={className} onClick={togglePlayPause}>
      {isPlaying ? <AudioPauseButton width={width} /> : <AudioPlayButton width={width} />}
    </button>
  );

  const MuteUnmuteButton = ({ width }: { width: string }) => (
    <button onClick={toggleMute}>
      {isMuted ? <MuteIcon width={width} /> : <RaiseVolumeIcon width={width} />}
    </button>
  );

  const SkipButton = ({
                        seconds,
                        Icon,
                        width,
                      }: {
    seconds: number
    Icon: React.FC<any>
    width: string
  }) => (
    <button onClick={() => skip(seconds)}>
      <Icon width={width} />
    </button>
  );

  return (
    <div>
      {/* Desktop Player */}
      <div className={styles.desktopAudioPlayer}>
        <PlayPauseButton width={"120px"} />
        <MuteUnmuteButton width={"120px"} />
        <SkipButton seconds={-15} Icon={BackFifteenIcon} width={"50px"} />
        <div className={styles.duration}>
          <span>
            {formatDuration(currentTime)} / {formatDuration(duration)}
          </span>
        </div>
        <input
          className={styles.progressBar}
          // @ts-ignore
          style={progressBarStyle}
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
        <SkipButton seconds={15} Icon={MoveFifteenIcon} width={"50px"} />
      </div>

      {/* Mobile Player */}
      <div className={styles.mobileAudioPlayer}>
        <PlayPauseButton className={styles.playPauseButton} width={"50px"} />
        <div className={styles.duration}>
          <span>
            {formatDuration(currentTime)} / {formatDuration(duration)}
          </span>
        </div>
        <input
          className={styles.progressBar}
          style={progressBarStyle}
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
        <div className={styles.mobileButtonContainer}>
          <MuteUnmuteButton width={"28px"} />
          <SkipButton seconds={-15} Icon={BackFifteenIcon} width={"20px"} />
          <SkipButton seconds={15} Icon={MoveFifteenIcon} width={"20px"} />
        </div>
      </div>
    </div>
  );
}
