import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./SocialTile.module.css";

export default function SocialTile(props) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  const tileColor = {
    color: isHovered ? `rgba(${props.color}, 1)` : `rgba(${props.color}, 0.5)`,
    // color: isHovered ? "rgba(27, 145, 207, 1)" : "rgba(27, 145, 207, 0.5)",
  };
  // console.log(props.color)

  return <a
    href={props.url}
    className={styles.tile}
    style={tileColor}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    target="_blank"
    rel="noreferrer">
      <FontAwesomeIcon icon={props.icon} />
    </a>
}
