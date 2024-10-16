import styles from "./styles.module.css";

import FeaturedImage from "@/app/_components/FeaturedImage";
import { LinkedInIcon, TwitterIcon } from "@/app/_icons/socialIcons";
import { getImage } from "@/app/_utilities/getImage";
import { Author } from "@/payload-types";
import { fetchMediaByID } from "@/app/_utilities/contentFetchers";

export default async function AuthorPill({ large = false, author }) {

  const { name, featuredImage, linkedIn, x } = author;

  const test = await fetchMediaByID("66ed88055946c64a204c9357");


  /* unsure if this will be useful, as all names have same length in figma

const dynamicVars = {
  '--dynamic-font-weight': large ? 'bold' : 'normal',
  '--dynamic-width': large ? '100%' : 'fit-content',
}
*/

  return (
    <a href={`./authors/${author.slug}`}>
      <div className={styles.authorPill}>
        <div className={styles.authorImage}>
          {featuredImage && <FeaturedImage src={featuredImage.url} />}
        </div>
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
    </a>
  );
}
