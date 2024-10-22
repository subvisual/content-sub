import Link from 'next/link'

import { LinkedInIcon, TwitterIcon } from "../../_icons/socialIcons";

export default function SocialLinks({ socials }) {
  return (
    <div style={{ marginTop: '10px' }}>
      {socials.linkedIn.length === 1 && (
        <Link href={socials.linkedIn[0].url} target={'_blank'} rel="noopener noreferrer">
          <LinkedInIcon />
        </Link>
      )}

      {socials.x.length === 1 && (
        <Link href={socials.x[0].url} target={'_blank'} rel="noopener noreferrer">
          <TwitterIcon />
        </Link>
      )}

      {socials.medium.length === 1 && (
        <Link href={socials.medium[0].url} target={'_blank'} rel="noopener noreferrer">
          <LinkedInIcon />
        </Link>
      )}

      {socials.github.length === 1 && (
        <Link href={socials.github[0].url} target={'_blank'} rel="noopener noreferrer">
          <LinkedInIcon />
        </Link>
      )}


    </div>
  )
}
