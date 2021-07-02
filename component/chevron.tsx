import styles from "./chevron.module.scss";

export default function Chevron() {
  return (
    <div className={styles.container}>
      <div className={styles.chevron}></div>
      <div className={styles.chevron}></div>
      <div className={styles.chevron}></div>
    </div>
  );
}
