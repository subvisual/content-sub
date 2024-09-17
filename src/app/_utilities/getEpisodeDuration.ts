import { useEffect, useState } from 'react'

import { formatEpisodeDuration } from '@/app/_utilities/formatEpisodeDuration'

export function getEpisodeDuration(src) {
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
