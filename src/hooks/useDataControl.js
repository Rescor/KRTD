import { useState, useEffect } from 'react';
import { getCurrentTrack } from '../utils/http';

export function useDataControl(focus) {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      let newData = await getCurrentTrack();
      setData(newData);

      const fetchDataTimeout = setTimeout(async () => {
        newData = await getCurrentTrack();
        setData(newData);
      }, (newData.now_playing.remaining + 1) * 1000);
      return () => clearTimeout(fetchDataTimeout);
    };

    fetchData();
  }, [focus]);

  return data;
}
