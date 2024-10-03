'use client'

import { useEffect, useState } from 'react'
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

  const [url, setUrl] = useState('')
  useEffect(() => {
    setUrl(window.location.href)

    return () => {
      setUrl('')
    }
  }, [])

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
            <LinkIcon width={'16'} height={'16'} />
            Copy
          </div>
        </button>
      </div>
      <div className={styles.desktopShare}>
        <p className={'outline'}>SHARE ARTICLE</p>
        <div className={styles.desktopShareBar}>
          <TwitterShareButton url={url}>
            <TwitterIcon />
          </TwitterShareButton>
          <LinkedinShareButton url={url}>
            <LinkedInIcon />
          </LinkedinShareButton>
          <FacebookShareButton url={url}>
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
