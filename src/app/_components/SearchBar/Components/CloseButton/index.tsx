import styles from "./styles.module.css";

export default function CloseButton() {
  return (<div className={styles.closeButton}>
      <p>Close</p>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19.5" stroke="#403F4C" />
        <path d="M26.4016 13.6001L13.6016 26.4001M26.4016 26.4001L13.6016 13.6001" stroke="#403F4C" stroke-linecap="round" />
      </svg>

    </div>
  );
}
