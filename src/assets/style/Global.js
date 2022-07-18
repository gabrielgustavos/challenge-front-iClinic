import styled from "styled-components";

export const softBlue = "#2C97D1";
export const white = "#FFFFFF";
export const black = "#2A2A2A"
export const title = "4.5rem";
export const subTitle = "0.8rem";
export const semiBold = "400";
export const bold = "700";
export const montSerrat = "Montserrat";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 703px) {
    text-align: center;
  }
`;

export const firstTitle = styled.h1`
  color: ${softBlue};
  font-size: ${title};
  font-family: ${montSerrat};
  font-weight: ${semiBold};
`;

export const secondTitle = styled.h2`
  color: ${softBlue};
  font-family: ${montSerrat};
  font-size: ${subTitle};
  font-weight: ${semiBold};
  text-transform: uppercase;
  line-height: 1.1rem;
  letter-spacing: 0.35em;
`;

export const btn = styled.button`
  background-color: ${softBlue};
  border-color: ${white};
  cursor: pointer;
  border-radius: 10px;
  width: 145px;
  height: 46px;
  margin-top: 70px;
  font-family: ${montSerrat};
  font-size: ${subTitle};
  font-weight: ${bold};
  color: ${white};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.35em;
`;

export const nav = styled.nav`
  font-family: ${montSerrat};
  font-size: ${subTitle};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
