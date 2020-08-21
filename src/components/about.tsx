import React from "react";
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid'

const HeaderStyle = styled.div`
  background: blue;
  height: 100vh;
`;


export const About = () => {
    return <HeaderStyle>
        <h1>
            About
        </h1>


    </HeaderStyle>
}