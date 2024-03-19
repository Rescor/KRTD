import { useEffect } from "react";

export function useInitPlayerValues({ setVolume, setSourceId }) {
  useEffect(() => {
    if (!localStorage.getItem(`source`)) {
      localStorage.setItem(`source`,'1')
    }

    if (!localStorage.getItem(`volume`)) {
      localStorage.setItem(`volume`,'100')
    }

    setVolume(localStorage.getItem('volume'));
    setSourceId(localStorage.getItem('source'));
  }, [setSourceId, setVolume]);
}
