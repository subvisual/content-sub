import styles from '@/app/_blocks/EpisodeContent/styles.module.css'
import { ApplePodcastIcon, SpotifyIcon } from '@/app/_icons/socialIcons'

export default function ListenOn({ className, spotify, apple }) {
  return (
    <div className={className}>
      <p>Listen on:</p>

      <span>

        { spotify && <a href={spotify} target="_blank" rel="noopener noreferrer">
          <SpotifyIcon />
        </a>}
        { apple && <a href={apple} target="_blank" rel="noopener noreferrer">
          <ApplePodcastIcon />
        </a>}
      </span>
    </div>
  )
}
