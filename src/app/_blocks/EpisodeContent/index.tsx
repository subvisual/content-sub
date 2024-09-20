import { PodcastEpisode } from '../../../payload/payload-types'

export default function EpisodeContent({ episode }: { episode: PodcastEpisode }) {
  const { spotify, apple, summary, notes, categories } = episode

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      {/* ListenOn Column */}
      <div style={{ backgroundColor: 'white', color: '#403F4C', flex: '1' }}>
        <div style={{ backgroundColor: 'white' }}>
          <div>
            <h1>ListenOn goes here</h1>
            <span>Listen on:</span>
            <p>
              SpotifyIcon linking to{' '}
              <a href={spotify} target="_blank" rel="noopener noreferrer">
                Spotify
              </a>
            </p>
            <p>
              AppleIcon linking to{' '}
              <a href={apple} target="_blank" rel="noopener noreferrer">
                Apple Podcasts
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* EpisodeContent Column */}
      <div style={{ backgroundColor: 'white', color: '#403F4C', flex: '2' }}>
        <h1>EpisodeContent block goes here</h1>
        <h3>Episode Summary</h3>
        <span>{summary}</span>
        <h3>Episode Notes</h3>
        <span>{notes}</span>
      </div>

      {/* Share/Category Column */}
      <div style={{ backgroundColor: '#F6F6F6', color: '#403F4C', flex: '1' }}>
        <div>
          <h1>Share block goes here</h1>
          <p>SocialMedia block with links</p>
        </div>
        <div>
          <h1>Category block</h1>
          <p>A CategoryPill per category: {categories.map(cat => cat.title).join(' | ')}</p>
        </div>
      </div>
    </div>
  )
}
