import Link from 'next/link'

import { LinkedInIcon } from '../../_icons/socialIcons'

export default function SocialLinks({ socials }) {
  return (
    <div style={{ marginTop: '10px' }}>
      {socials.map((link, i) => (
        <Link href={link} key={i}>
          <LinkedInIcon />
        </Link>
      ))}
    </div>
  )
}
