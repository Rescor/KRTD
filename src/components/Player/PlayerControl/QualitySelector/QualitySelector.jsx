import styles from "./QualitySelector.module.css";

export default function QualitySelector({ sources, sourceId, sourceHandler }) {
  return <div className={styles.selectors_wrapper}>
    <div className={styles.select_wrapper}>
      <select className={styles.select}
              value={sourceId}
              onChange={event => sourceHandler(event.target.value)}
      >
        {sources.map((source, i) =>
          <option key={source.url} value={i}>
            {source.info}
          </option>
        )}
      </select>
    </div>
  </div>
}
