import { useRef, useEffect } from "react";

export default function Player(props) {
  const audioRef = useRef(null);

  useEffect( () => {
    audioRef.current.volume = props.volume / 100;
  }, [props.volume])

  useEffect(() => {

    if (props.isPlaying) {
      audioRef.current.src = props.src;
      props.setIcon('loading')
      audioRef.current.load();
      audioRef.current.oncanplay = () => {
        audioRef.current.play();
        props.setIcon('pause');
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        props.setIcon('play')
      }
    }
  }, [props.isPlaying, props.src]);

  return <audio ref={audioRef} src={props.src} preload="none" />
}
