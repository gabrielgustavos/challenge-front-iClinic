import { React } from "react";
import * as S from "../assets/style/Global";
import { useNavigate } from "react-router-dom";
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
  );
};

export default Home;
