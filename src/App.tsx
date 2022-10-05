import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Player from "./components/Player";
import useCurrentRoute from "./hooks/useCurrentPath";

function App() {
  const { currentPath } = useCurrentRoute();

  return (
    <div className="flex flex-col h-screen">
      <Header title={currentPath} />
      <div className="h-full p-6 overflow-scroll dark:bg-secondary">
        <Outlet />
      </div>
      {currentPath !== "playing" && <Player />}
      <Navigation />
    </div>
  );
}

export default App;
