import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";
const SideBar = () => {
  return (
    <Wrapper>
      <Navig to="/">Home</Navig>
      <Navig to="/todos">To Dos</Navig>
      <Navig to="/mood">Mood Check</Navig>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: lightgray;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-items: center;

  padding-top: 100px;
`;
const Navig = styled(NavLink)`
  margin-top: 10px;

  align-items: center;
  font-weight: bolder;
  height: 10vh;
  color: black;
  padding-left: 15px;
  color: ${COLORS.primary};

  &:hover {
    color: ${COLORS.secondary};

    border-radius: 50px;
  }
`;

export default SideBar;
