import { className } from 'postcss-selector-parser'

import { getImage } from '../../_utilities/getImage'

export default function FeaturedImage({ src, className }) {
  return <img className={className} src={getImage(src)} />
}
