import { className } from 'postcss-selector-parser'

import { getImage } from '../../_utilities/getImage'

import styles from './styles.module.css'

export default function FeaturedImage({ src, className }) {
  return <img className={className ? className : styles.featuredImage} src={getImage(src)} />
}
