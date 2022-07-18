import { React } from "react";
import * as style from "../assets/style/Global";
import { Routes, Route, useNavigate } from "react-router-dom";
import Master from "./Master";

export const Home = () => {
  const navigate = useNavigate();

  const redirectAsync = () => {
    navigate("master");
  };

  return (
    <Routes>
      <style.Container>
        <style.firstTitle>
          Welcome to <strong>iClinic</strong>
        </style.firstTitle>
        <style.secondTitle>Front End Challenge</style.secondTitle>
        <style.btn
          id="btn"
          onClick={redirectAsync}
        >
          <span id="txtBtn">Start</span>
        </style.btn>
      </style.Container>

      <Route path="master" element={<Master />} />
    </Routes>
  );
};

export default Home;
