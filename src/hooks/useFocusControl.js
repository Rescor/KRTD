import { useEffect, useState } from "react";

export function useFocusControl() {
  const [hasFocus, setHasFocus] = useState(true);

  useEffect(() => {
    const handleWindowFocus = () => { setHasFocus(true) };
    const handleWindowBlur = () => { setHasFocus(false) };

    window.addEventListener('focus', handleWindowFocus);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      window.removeEventListener('focus', handleWindowFocus);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, []);

  return [hasFocus, setHasFocus]
}
