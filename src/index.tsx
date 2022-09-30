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
import Album from "./pages/album";
import Playlist from "./pages/playlist";
import Category from "./pages/category";

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
            <Route path="/album/:id" element={<Album />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/playlist/:id" element={<Playlist />} />
            <Route path="/featured" element={<Featured />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/playing" element={<Playing />} />
          </Route>
          <Route path="*" element={<Login />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  </React.StrictMode>
);
