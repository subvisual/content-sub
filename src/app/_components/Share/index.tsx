'use client'

import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'

import styles from './styles.module.css'

import { LinkIcon, ShareIcon } from '@/app/_icons/icons'
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '@/app/_icons/socialIcons'

export default function Share() {
  const copyURLToClipboard = () => {
    navigator.clipboard.writeText(document.URL)
  }

  const shareTo = async () => {
    await navigator.share({
      title: 'cenas',
      text: 'mais cenas',
      url: window.location.href,
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.mobileShare}>
        {/* ToDo: test navigator.share on local SSL */}
        <button className={styles.button} onClick={() => shareTo()}>
          <div>
            <ShareIcon width={'16'} height={'16'} />
            Share
          </div>
        </button>
        <button className={styles.button} onClick={() => copyURLToClipboard()}>
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.91998 6.79351L3.43101 8.28248C2.87492 8.83856 2.55514 9.59521 2.56098 10.3904C2.56683 11.1856 2.87961 11.9469 3.46209 12.5114C4.02655 13.0939 4.78797 13.4066 5.58305 13.4125C6.39626 13.4185 7.135 13.1167 7.69112 12.5606L9.18009 11.0716M11.082 9.20612L12.5709 7.71715C13.127 7.16106 13.4468 6.40442 13.441 5.60921C13.4351 4.814 13.1223 4.05274 12.5399 3.48825C11.9755 2.92393 11.2142 2.61112 10.419 2.60528C9.62383 2.59944 8.86708 2.90107 8.31096 3.45718L6.82199 4.94614M5.74305 10.2179L10.21 5.75101"
                stroke="#403F4C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Copy
          </div>
        </button>
      </div>
      <div className={styles.desktopShare}>
        <p className={'outline'}>SHARE ARTICLE</p>
        <div className={styles.desktopShareBar}>
          <TwitterShareButton url={document.URL}>
            <TwitterIcon />
          </TwitterShareButton>
          <LinkedinShareButton url={document.URL}>
            <LinkedInIcon />
          </LinkedinShareButton>
          <FacebookShareButton url={document.URL}>
            <FacebookIcon />
          </FacebookShareButton>
        </div>
        <div className={styles.desktopCopyButton} onClick={() => copyURLToClipboard()}>
          <LinkIcon />
          Copy
        </div>
      </div>
    </div>
  )
}
