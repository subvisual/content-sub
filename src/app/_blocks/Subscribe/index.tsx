import styles from "./styles.module.css";

export function Subscribe() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={'/subscribe-card-image.png'} />
      </div>
      <div className={styles.CTABlock}>
        <h5>Subscribe to <br/> Subvisual Inspo</h5>
        <div className={styles.emailContainer}>
          <input className={styles.emailInput} placeholder={"Your email"}></input>
          {/* TODO: Implement the hook to subscribe */}
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
