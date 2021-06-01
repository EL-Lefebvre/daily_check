import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import Main from "./Main";
import Plant from "./assets/plant.png"
const Logo =() => {
    return (

        <Wrapper>
            <div>

    <PlantImage src={Plant} />
            </div>
            <div>

    <Text>BREATHE</Text>
            </div>
</Wrapper>
)
}

const Wrapper = styled.div`
display:flex;

align-items:center;
`;
const PlantImage = styled.img`
height:100px;
`;
const Text = styled.h2`
color:white;
`;

export default Logo;