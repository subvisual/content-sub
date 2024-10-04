"use client";

export default function AudioPlayer({ className, src, type }: { className: string, src: string, type: string }) {
  return (
    <div className={className}>
      <audio controls style={{ width: "100%" }}>
        <source src={src} type={type} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
