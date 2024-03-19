import styles from './SongName.module.css';

export default function SongName({ song }) {
  return <>
    <p className={styles.song_title}>{song.title}</p>
    <p className={styles.song_artist}>{song.artist}</p>
  </>
}
