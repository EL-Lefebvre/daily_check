import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import Main from "./Main";
import TextArea from "./Journaling/TextArea";
import Logo from "./Logo"
const Home = () => {
  return (
    <Main title={"What's on your mind today?"}>
      <Logo />
      <Wrapper><TextArea/></Wrapper>
      
    </Main>
  );
};

const Wrapper = styled.div`

  height: 50vh;
`;
const Title = styled.div`
  background-color: ${COLORS.secondary};
`;

export default Home;
