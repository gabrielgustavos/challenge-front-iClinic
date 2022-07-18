import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Home />
    </Router>
  </React.StrictMode>
);