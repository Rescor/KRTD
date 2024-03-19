import { socialLinks } from '../../utils/data'
import SocialTile from "./SocialTile";
import styles from "./SocialBar.module.css";

export default function SocialBar() {


  return <div className={styles.social_bar}>
    {socialLinks.map(link => <SocialTile
      icon={link.icon}
      url={link.url}
      color={link.color}
      key={link.url}/>)}
  </div>
}
