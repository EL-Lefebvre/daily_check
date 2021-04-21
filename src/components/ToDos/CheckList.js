import React from "react";
import styled from "styled-components";
import Main from "../Main";
const CheckList = () => {
  return <Main title={"To Dos"} />;
};

const Wrapper = styled.div`
  color: white;
  border: 1px solid white;
  height: 70vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  border-radius: 20px;
`;
const Title = styled.div``;
const MainArea = styled.div``;
export default CheckList;
