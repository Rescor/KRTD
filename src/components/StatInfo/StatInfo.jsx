import StatElem from "./StatElem/StatElem";
import NoneSelect from "../UI/NoneSelect";
import styles from './StatInfo.module.css';

const DEBUG = localStorage.getItem('debug');

export default function StatInfo({ data }) {
  return <div className={styles.stat_container}>
    <StatElem data={data?.live?.streamer_name || 'AutoDJ'} icon='mic' />
    {DEBUG && <NoneSelect>
      <StatElem data={data?.listeners?.current || 0} icon='headphones' />
    </NoneSelect>}
  </div>
}
