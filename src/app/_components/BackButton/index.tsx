// TODO: update href to filter for the same category
import Link from 'next/link'

import BackArrow from '../../_icons/BackArrow'
import styles from './styles.module.css'

export default function BackButton({ className, color }: { className?: string; color?: string }) {
  return (
    <>
      <Link className={className} href="/">
        <BackArrow className={styles.backArrow} color={color} />
        <span style={{ color: color ? color : 'var(--dark-rock-800)' }}>Back</span>
      </Link>
    </>
  )
}
