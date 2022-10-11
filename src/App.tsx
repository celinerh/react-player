import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Player from "./components/Player";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Outlet />
      <Player />
      <Navigation />
    </div>
  );
}

export default App;
