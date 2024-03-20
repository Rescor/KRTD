import StatElem from "./StatElem/StatElem";
import styles from './StatInfo.module.css';
import NoneSelect from "../UI/NoneSelect";

export default function StatInfo({ data }) {
  return <div className={styles.stat_container}>
    <StatElem data={data?.live?.streamer_name || 'AutoDJ'} icon='mic' />
    <NoneSelect>
      <StatElem data={data?.listeners?.current || 0} icon='headphones' />
    </NoneSelect>
  </div>
}
