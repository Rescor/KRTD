import styles from './Loader.module.css';

export default function Loader() {
  return <div className={styles.loader}>
    <div className={styles.r1}></div>
    <div className={styles.r3}></div>
    <div className={styles.r2}></div>
    <div className={styles.r4}></div>
    <div className={styles.r3}></div>
    <div className={styles.r5}></div>
    <div className={styles.r3}></div>
    <div className={styles.r4}></div>
    <div className={styles.r1}></div>
  </div>
}
