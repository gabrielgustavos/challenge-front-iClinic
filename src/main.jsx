import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Master from "./pages/Master";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="master" element={<Master />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
