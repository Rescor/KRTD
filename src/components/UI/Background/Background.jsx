import { bgImages } from "../../../utils/data";
import styles from "./Background.module.css";

const randomIndex = Math.floor(Math.random() * bgImages.length);
const randomBgImage = bgImages[randomIndex];
const bgi = `/assets/bg/${randomBgImage}`;
const style = {
  background: `url(${bgi}) center/cover no-repeat rgba(0,0,0,0.73)`
}

export default function Background() {
  return <div className={styles.background} style={style}></div>
}
