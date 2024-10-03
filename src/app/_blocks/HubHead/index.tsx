import styles from './styles.module.css'

import { Highlights } from "@/app/_blocks/HubHead/Highlights";

export default function HubHead({ highlights }) {

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
      <Highlights main={false} content={secondaryHighlight}/>
    </div>
  )
}
