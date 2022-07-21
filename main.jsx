import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./src/pages/Home/Home";
import Master from "./src/pages/Master/Master";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./src/assets/style/main.sass"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="master" element={<Master />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
