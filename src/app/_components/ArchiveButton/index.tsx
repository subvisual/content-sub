import { BlogpostIcon, CaseStudiesIcon, PodcastIcon, TalksIcon } from '@/app/_icons/icons'

const iconMap = {
  blogposts: <BlogpostIcon width={'20'} color={"currentColor"}/>,
  'podcasts': <PodcastIcon width={'20'} color={"currentColor"}/>,
  'case-studies': <CaseStudiesIcon width={'20'} color={"currentColor"}/>,
  'talks-and-roundtables': <TalksIcon width={'20'} color={"currentColor"}/>,
}

import styles from './styles.module.css'
import Link from "next/link";

function formatTitle(text: string) {
  return text
    .replace(/\band\b/g, '&')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

interface ArchiveButtonProps {
  collection: 'blogposts' | 'podcasts' | 'case-studies' | 'talks-and-roundtables'
  color?: string
}

export default function ArchiveButton({ collection, color }: ArchiveButtonProps) {
  return (
    <Link href={`/${collection}`} style={{ color: color || 'var(--dark-rock-800)' }}>
      <h6 className={styles.container}>
        {iconMap[collection]} {formatTitle(collection)}
      </h6>
    </Link>
  )
}
