import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
const Main = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <MainArea>{children}</MainArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  border: 1px solid white;
  height: 70vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  background-color: ${COLORS.sixth};
`;
const Title = styled.div`

  height: 10vh;
  width: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainArea = styled.div`

background-color: ${COLORS.primary};
`;
export default Main;
