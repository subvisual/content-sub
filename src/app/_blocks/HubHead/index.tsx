import { Highlights } from './Highlights'
import styles from './styles.module.css'

export default async function HubHead({ highlights }) {
  const { mainHighlight, secondaryHighlight } = highlights

  return (
    <div className={styles.container}>
      <div className={styles.hubLogo}>
        <p>
          Content
          <br />
          <span style={{ fontFamily: 'var(--acta-bold)' }}>Hub</span>
        </p>
      </div>
      <Highlights main={true} content={mainHighlight} />
      <Highlights main={false} content={secondaryHighlight} />
    </div>
  )
}
