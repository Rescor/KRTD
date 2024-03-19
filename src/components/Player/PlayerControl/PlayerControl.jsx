import { useEffect, useState } from "react";
import { sources } from '../../../utils/data'
import Player from "../Player";
import VolumeSlider from "../../UI/VolumeSlider/VolumeSlider";
import Icon from "../../UI/Icon";
import styles from "./PlayerControl.module.css";
import QualitySelector from "./QualitySelector/QualitySelector";

export default function PlayerControl() {
  const [sourceId, setSourceId] = useState('1');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState('100');
  const [iconStatus, setIconStatus] = useState('play')

  useEffect(() => {
    if (!localStorage.getItem(`source`)) {
      localStorage.setItem(`source`,'1')
    }

    if (!localStorage.getItem(`volume`)) {
      localStorage.setItem(`volume`,'100')
    }

    setVolume(localStorage.getItem('volume'));
    setSourceId(localStorage.getItem('source'));
  }, []);

  function playHandler() { setIsPlaying(prev => !prev) }

  function changeSourceHandler(id) {
    localStorage.setItem(`source`, id);
    setSourceId(id);
  }

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    localStorage.setItem(`volume`, newValue);
  };

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
