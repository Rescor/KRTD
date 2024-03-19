import { useState } from "react";
import { useInitPlayerValues } from "../../../hooks/useInitPlayerValues";
import QualitySelector from "./QualitySelector/QualitySelector";
import VolumeSlider from "../../UI/VolumeSlider/VolumeSlider";
import Icon from "../../UI/Icon";
import Player from "../Player";
import { sources } from '../../../utils/data'
import styles from "./PlayerControl.module.css";

export default function PlayerControl() {
  const [sourceId, setSourceId] = useState('1');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState('100');
  const [iconStatus, setIconStatus] = useState('play')

  useInitPlayerValues({ setVolume, setSourceId })

  function playHandler() { setIsPlaying(prev => !prev) }

  function changeSourceHandler(id) {
    localStorage.setItem(`source`, id);
    setSourceId(id);
  }

  function handleVolumeChange(event, newValue) {
    setVolume(newValue);
    localStorage.setItem(`volume`, newValue);
  }

  return <>
    <Player
      isPlaying={isPlaying}
      src={sources[sourceId].url}
      setIcon={setIconStatus}
      volume={volume}
    />

    <div className={styles.control_wrapper}>
      <div onClick={playHandler} className={styles.play_button}>
        <Icon icon={iconStatus}/>
      </div>
      <VolumeSlider volume={volume} onVolumeChange={handleVolumeChange}/>

      <QualitySelector
        sources={sources}
        sourceId={sourceId}
        sourceHandler={changeSourceHandler}
      />
    </div>
  </>
}
