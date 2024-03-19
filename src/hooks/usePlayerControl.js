import { useEffect } from "react";

export function usePlayerControl({ volume, isPlaying, audioRef, src, setIcon }) {
  useEffect( () => {
    audioRef.current.volume = volume / 100;
  }, [audioRef, volume])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.src = src;
      setIcon('loading')
      audioRef.current.load();
      audioRef.current.oncanplay = () => {
        audioRef.current.play();
        setIcon('pause');
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        setIcon('play')
      }
    }
  }, [audioRef, isPlaying, setIcon, src]);
}
