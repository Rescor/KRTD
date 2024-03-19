import Icon from "../../UI/Icon";
import styles from './StatElem.module.css';

export default function StatElem({ data, icon }) {
  return <div className={styles.elem_container}>
    <Icon icon={icon} />
    <p className={styles.elem_text}>{data}</p>
  </div>
}
