import StatElem from "./StatElem/StatElem";
import styles from './StatInfo.module.css';

export default function StatInfo({ data }) {
  return <div className={styles.stat_container}>
    <StatElem data={data?.live?.streamer_name || 'AutoDJ'} icon='mic' />
    <StatElem data={data?.listeners?.current || 0} icon='headphones' />
  </div>
}
