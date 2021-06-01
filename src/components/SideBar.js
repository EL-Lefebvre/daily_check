import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";
const SideBar = () => {
  return (
    <Wrapper>
        <Main>
      <Navig to="/">Home</Navig>
      <Navig to="/todos">To Dos</Navig>
      <Navig to="/mood">Mood Check</Navig>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.primary};
  height: 100vh;

  border-radius: 20px;
  padding-top: 100px;
`;
const Main = styled.div`
background-color:${COLORS.primary};
display: flex;
flex-direction: column;
justify-content:space-evenly;
align-items:center;
height:50vh;
border-radius:20px;
border: 5px double white;
`;
const Navig = styled(NavLink)`
background-color:${COLORS.sixth};
  padding-top: 30px;
width:80%;
  align-items: center;
  font-weight: bolder;
  height: 10vh;
  color: ${COLORS.fifth};
  padding-left: 15px;
border: 1px solid white;
border-radius:20px;
  &:hover {
    color: black;
   

  }
`;

export default SideBar;
