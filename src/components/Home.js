import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import Main from "./Main";
const Home = () => {
  return (
    <Main title={"Home"}>
      <Wrapper>Hi</Wrapper>
    </Main>
  );
};

const Wrapper = styled.div`
  background-color: blue;
  height: 50vh;
`;
const Title = styled.div`
  background-color: ${COLORS.secondary};
`;

export default Home;
