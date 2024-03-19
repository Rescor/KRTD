import { useFocusControl } from "../hooks/useFocusControl";
import { useDataControl } from "../hooks/useDataControl";
import NowPlaying from "../components/NowPlaying/NowPlaying";
import Loader from "../components/UI/Loader/Loader";

const DEBUG = localStorage.getItem('debug');

export default function MainPage() {
  const [hasFocus, setHasFocus] = useFocusControl();
  const data = useDataControl(hasFocus);

  return <>
    <NowPlaying data={data} setHasFocus={setHasFocus} />
    {DEBUG && <>
      <Loader />
      {(data ? <p style={{textAlign: 'center'}}>TrackID: {data.now_playing.song.id}</p> :
        <span>Loading...</span>)}
    </>}
  </>
}
