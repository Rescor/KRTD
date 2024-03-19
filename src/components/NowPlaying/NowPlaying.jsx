import StatInfo from "../StatInfo/StatInfo";
import SongName from './SongName/SongName';
import Loader from "../UI/Loader/Loader";
import styles from './NowPlaying.module.css';

export default function NowPlaying({ data }) {
  return <>
    <div className={styles.now_playing}>
      {data?.now_playing?.song ?
        <>
          <StatInfo data={data}/>
          <SongName song={data?.now_playing?.song}/>
        </> : <Loader/>}
    </div>
  </>
}
