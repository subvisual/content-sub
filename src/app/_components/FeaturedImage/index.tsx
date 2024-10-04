import { getImage } from '../../_utilities/getImage'
import styles from './styles.module.css'

import { Media } from '@/payload/payload-types'

export default function FeaturedImage({
  src,
  className,
}: {
  className?: string
  src: string | Media
}) {
  return (
    <img
      className={className ? className : styles.featuredImage}
      src={getImage(src)}
      alt={src.alt}
    />
  )
}
