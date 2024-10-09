'use client'

const AudioPlayer: React.FC<{ src: string; type: string }> = ({ src, type }) => {
  return (
    <div style={{ width: '100%' }}>
      <audio controls style={{ width: '100%' }}>
        <source src={src} type={type} />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default AudioPlayer
