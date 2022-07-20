import { useState, React } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { forceSides } from "../API";
import Master from "./Master";
import "./home.sass";

export const Home = () => {
  const navigate = useNavigate("master");
  const [loading, setLoading] = useState(false);

  return (
    <main className="container">
      <header className="header_container">
        <h1 className="principal_title_home">
          Welcome to <strong>iClinic</strong>
        </h1>
        <h2 className="sub_title_home">Front End Challenge</h2>
      </header>
      <nav>
        <button
          type="button"
          className="home_btn"
          disabled={loading}
          onClick={() => forceSides(setLoading, navigate)}
        >
          Start
        </button>
        <Routes>
          <Route path="master" element={<Master />} />
        </Routes>
      </nav>
    </main>
  );
};

export default Home;
