// TODO: update href to filter for the same category
import Link from 'next/link'

import BackArrow from '../../_icons/BackArrow'
import styles from './styles.module.css'

export default function BackButton({ className }) {
  return (
    <>
      <Link className={className} href="/">
        <BackArrow className={styles.backArrow} />
        Back
      </Link>
    </>
  )
}
