import Image from 'next/image'

import styles from './styles.module.css'

export function Subscribe() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image width={'10'} height={'10'}
          className={styles.image}
          src={'https://raw.githubusercontent.com/subvisual/content-sub/refs/heads/main/public/media/subscribe-card-image.png'}
          alt={'subscribe card image'}
        />
      </div>
      <div className={styles.CTABlock}>
        <h5>
          Subscribe to <br /> Subvisual Inspo
        </h5>
        <div className={styles.emailContainer}>
          <input className={styles.emailInput} placeholder={'Your email'}></input>
          {/* TODO: Implement the hook to subscribe */}
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
