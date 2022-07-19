import { React, useState } from "react";
import * as S from "../assets/style/Global";
import { Routes, Route, useNavigate } from "react-router-dom";
import Master from "./Master";
import { forceSides, FORCE_SIDE } from "../API";

export const Home = () => {
  const navigate = useNavigate();
  const redirectAsync = () => {
    forceSides();
    if(FORCE_SIDE[0]){
    navigate("master");
    }
  };

  return (
    <Routes>
      <S.Container>
        <S.firstTitle>
          Welcome to <strong>iClinic</strong>
        </S.firstTitle>
        <S.secondTitle>Front End Challenge</S.secondTitle>
        <S.btn
          id="btn"
          onClick={redirectAsync}
        >
          <span id="txtBtn">Start</span>
        </S.btn>
      </S.Container>

      <Route path="master" element={<Master />} />
    </Routes>
  );
};

export default Home;
