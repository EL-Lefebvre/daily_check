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


margin-left:20px;
  border-radius: 20px;
  padding-top: 100px;
  @media (min-width: 200px) and (max-width:700px) {
    height:20vh;
    margin-left:0px;
    padding-top:10px;
  }
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
@media (min-width: 200px) and (max-width:700px) {
height:7vh;
flex-direction:row;
border-radius:0px;
border: 1px solid white;

}
`;
const Navig = styled(NavLink)`
display:flex;
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
  @media (min-width: 200px) and (max-width:700px) {
    height:3vh;
    padding:5px;
    border-radius:0px;
    width:25vw;
    align-items:center;
    text-decoration:none;
    font-size:80%;
    justify-content:center;
    }
`;

export default SideBar;
