import React from "react";
import styled from "styled-components";
const CheckList = () => {
  return (
    <Wrapper>
      <Title>To Dos</Title>
      <Main></Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
`;
const Title = styled.div``;
const Main = styled.div``;
export default CheckList;
