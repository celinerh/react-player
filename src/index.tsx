import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Playing from "./pages/playing";
import Login from "./pages/login";
import { TokenProvider } from "./contexts/AuthContext";
import Featured from "./pages/featured";
import Albums from "./pages/albums";
import Playlists from "./pages/playlists";
import Categories from "./pages/categories";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<App />}>
            <Route path="/albums" element={<Albums />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/featured" element={<Featured />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/playing" element={<Playing />} />
          </Route>
          <Route path="*" element={<Login />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  </React.StrictMode>
);
