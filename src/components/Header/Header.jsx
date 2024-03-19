import Logo from "./Logo/Logo";
import SocialBar from "../Social/SocialBar";
import styles from './Header.module.css';

export default function Header() {
  return <header className={styles.header}>
    <Logo />
    <SocialBar/>
  </header>
}
