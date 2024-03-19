import { useRef } from "react";
import { usePlayerControl } from "../../hooks/usePlayerControl";

export default function Player({ setIcon, src, isPlaying, volume }) {
  const audioRef = useRef(null);
  usePlayerControl({ volume, isPlaying, audioRef, src, setIcon })

  return <audio ref={audioRef} src={src} preload="none" />
}
