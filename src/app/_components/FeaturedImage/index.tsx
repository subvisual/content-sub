import { getImage } from '../../_utilities/getImage'
import { className } from "postcss-selector-parser";

export default function FeaturedImage({ src, className }) {
  return (

      <img className={className} src={getImage(src)} />

  )
}
