import Link from 'next/link'

import { LinkedInIcon } from '../../_icons/socialIcons'

export default function SocialLinks({ socials }: { socials: string[] }) {
  return (
    <div style={{ marginTop: '10px' }}>
      {socials.map((link, i) => (
        <Link href={link} key={i}>
          <LinkedInIcon size={32} />
        </Link>
      ))}
    </div>
  )
}
