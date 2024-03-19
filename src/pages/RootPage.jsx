import { Outlet } from "react-router-dom";
import Background from "../components/UI/Background/Background";
import Header from "../components/Header/Header";
import PlayerControl from "../components/Player/PlayerControl/PlayerControl";

export default function RootPage() {
    return <>
      <Background />
      <Header />
      <Outlet />
      <PlayerControl />
    </>
}
