import React from "react";
import styled from "styled-components";

const TextArea = () => {
  return (
    <Wrapper >
     <Text type="text" />
      
    </Wrapper>
  );
};

const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding-top:20px;

`;
const Text = styled.input`
width:75%;
height:25px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius:20px;
border:none;
`;

export default TextArea;
