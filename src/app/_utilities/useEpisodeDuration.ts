import { useEffect, useState } from 'react'

import { formatEpisodeDuration } from "./formatEpisodeDuration"

export function useEpisodeDuration({ src }: { src: string }): string {
  const [duration, setDuration] = useState<number | null>(null)

  useEffect(() => {
    const audio = new Audio(src)

    // Set the audio duration when metadata is loaded
    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration)
    })

    // Cleanup event listener on component unmount
    return () => {
      audio.removeEventListener('loadedmetadata', () => {})
    }
  }, [src])

  return formatEpisodeDuration(duration)
}
