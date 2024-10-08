import styles from './styles.module.css'

import FeaturedImage from '@/app/_components/FeaturedImage'
import { LinkedInIcon, TwitterIcon } from '@/app/_icons/socialIcons'
import { getImage } from '@/app/_utilities/getImage'
import { Socials } from '@/payload/globals/Socials'
import { Author } from '@/payload/payload-types'

export default function AuthorPill({ large = false, author }) {

  const { name, featuredImage, linkedIn, x } = author

  /* unsure if this will be useful, as all names have same length in figma

const dynamicVars = {
  '--dynamic-font-weight': large ? 'bold' : 'normal',
  '--dynamic-width': large ? '100%' : 'fit-content',
}
*/

  return (
    <>
      <div className={styles.authorPill}>
        <FeaturedImage className={styles.authorImage} src={featuredImage} />
        {name}
      </div>

      {large && (
        <div className={styles.socials}>
          {linkedIn && (
            <a href={linkedIn}>
              <LinkedInIcon />
            </a>
          )}
          {x && (
            <a href={x}>
              <TwitterIcon />
            </a>
          )}
        </div>
      )}
    </>
  )
}
