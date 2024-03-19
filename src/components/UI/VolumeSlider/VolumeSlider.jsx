/* TODO: Refactor */

import { useEffect, useState } from "react";
import { Slider } from "@mui/material";
import Icon from "../Icon";
import styles from './VolumeSlider.module.css'

export default function VolumeSlider({volume, onVolumeChange}) {
  const [volumeIcon, setVolumeIcon] = useState('volumeHigh')

  useEffect(() => {
    if (volume === 0) setVolumeIcon('volumeOff')
    else if (volume < 20) setVolumeIcon('volumeLow')
    else if (volume <= 64) setVolumeIcon('volumeMedium')
    else if (volume > 65) setVolumeIcon('volumeHigh')
  }, [volume])

  return <div className={styles.slider_wrapper}>
      <Icon icon={volumeIcon} />

      <Slider
        aria-label="Volume"
        style={{margin: 'auto 12px'}}
        min={0}
        max={100}
        value={Number(volume)}
        onChange={onVolumeChange}
        sx={{
          width: 100,
          color: 'darkgray',
          '& .MuiSlider-thumb': {
            width: '12px',
            height: '12px'
          },
          '& .MuiSlider-rail': {
            height: '2px'
          },
          '& .MuiSlider-track': {
            height: '2px'
          },
        }}
      />
    </div>
}
