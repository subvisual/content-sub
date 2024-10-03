import { getImage } from '../../_utilities/getImage'
import { Media } from "@/payload/payload-types";

import styles from './styles.module.css'

export default function FeaturedImage({ src, className } : { className?: string , src: string | Media}) {
  return <img className={className ? className : styles.featuredImage} src={getImage(src)} alt={src.alt} />
}
