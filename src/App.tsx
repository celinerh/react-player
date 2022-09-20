import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import useCurrentRoute from "./hooks/useCurrentPath";

function App() {
  const { currentPath } = useCurrentRoute();

  return (
    <div className="flex flex-col h-screen">
      <Header title={currentPath} />
      <div className="h-full p-6">
        <Outlet />
      </div>
      <Navigation />
    </div>
  );
}

export default App;
