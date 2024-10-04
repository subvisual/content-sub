"use client";

import { BackFifteenIcon, MoveFifteenIcon, PlayButton } from "@/app/_blocks/EpisodeHead/AudioPlayer/Buttons";
import { MuteIcon } from "@/app/_icons/icons";

export default function AudioPlayer({ className, src, type }: { className: string, src: string, type: string }) {
  return (
    <div className={className}>
      <audio>
        <source src={src} type={type} />
        Your browser does not support the audio element.
      </audio>
      <button>
        Play
      </button>
      <span>current</span>
      <input/>








    </div>
  );
}
