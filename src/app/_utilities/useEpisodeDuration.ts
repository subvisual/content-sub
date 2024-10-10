import { useEffect, useState } from 'react'

import { formatEpisodeDuration } from './formatEpisodeDuration'

export function useEpisodeDuration(src: string): string {
  const [duration, setDuration] = useState<number>(0)

  useEffect(() => {
    const audio = new Audio(src)

    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration)
    })

    return () => {
      audio.removeEventListener('loadedmetadata', () => {})
    }
  }, [src])

  return formatEpisodeDuration(duration)
}
