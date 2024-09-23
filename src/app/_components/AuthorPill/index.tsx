import { getImage } from '@/app/_utilities/getImage'

export default function AuthorPill({ author }) {
  return (
    <div style={{ outlineStyle: 'solid', outlineColor: 'blue', width: 144 }}>
      <div style={{ display: 'flex' }}>
        <img style={{ width: 32, height: 32 }} src={getImage(author.featuredImage)} />
        <span>{author.name}</span>
      </div>
    </div>
  )
}
