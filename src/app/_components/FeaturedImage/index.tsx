import { Media } from '../../../payload/payload-types'
import { getImage } from '../../_utilities/getImage'
import styles from './styles.module.css'

export default function FeaturedImage({
  src,
  className,
}: {
  src: string | Media
  className?: string
}) {
  return <img className={className ? className : styles.featuredImage} src={getImage(src)} />
}
