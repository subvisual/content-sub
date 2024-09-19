import { getImage } from '@/app/_utilities/getImage'

export default function FeaturedImage({ src }) {

  return (
    <div style={{ width: 120, height: 120, marginRight: '20px' }}>
      <img
        src={getImage(src)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
      />
    </div>
  )
}
