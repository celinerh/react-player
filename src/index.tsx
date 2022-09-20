import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Playing from "./pages/playing";
import Login from "./pages/login";
import { TokenProvider } from "./contexts/AuthContext";

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
            <Route path="/home" element={<Home />} />
            <Route path="/playing" element={<Playing />} />
          </Route>
          <Route path="*" element={<Login />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  </React.StrictMode>
);