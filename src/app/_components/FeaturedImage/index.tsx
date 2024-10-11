import Image from 'next/image'

import { getImage } from '../../_utilities/getImage'
import styles from './styles.module.css'

import { Media } from '@/payload/payload-types'

export default function FeaturedImage({ src, className }: { className?: string; src: Media }) {
  return (
    <Image width={'10'} height={'10'}
      className={className ? className : styles.featuredImage}
      src={getImage(src)}
      alt={src.alt}
    />
  )
}
