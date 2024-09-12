import React from "react";

export default function AudioPlayer({ src, type }) {
  return (
    <audio controls style={{width:'100%'}}>
      <source src={src} type={type} />
    </audio>
  );
}
