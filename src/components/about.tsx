import React from "react";
import styled from 'styled-components';
import { Col } from 'react-styled-flexboxgrid'
import { Parallax } from 'react-parallax';

const Container = styled.div`
    height: 80vh;
    max-width: 1024px;
    margin: 0 auto;
    padding: 10vh 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


const DisplayText = styled(Col)`
    line-height: 30px;
    color: rgb(100,100,100);
    font-weight: 200;
    font-style: italic;
`;


const DisplayImage = styled(Col)`
    height: 100%;
    margin-top: 200px;
`;


const ParallaxImg = styled(Parallax)`
    overflow: visible !important;
`;

const SpanText = styled.span`
    color: #2c3e50;
    font-weight: 800;
`;


export const About = () => {
    return <Container id="About">



        <DisplayText xs={11} md={5}>

            <p>Young graduate in multimedia and communication technologies, I am a web and mobile applications developer. 
            I have advanced notions in <SpanText>design</SpanText> and I work with <SpanText>UX/UI</SpanText> techniques. </p>

            <p>I develop my websites and applications with new technologies such as <SpanText>React, Flutter, Firebase, Node.</SpanText>
            With my experience in the IT field, I have been able to work in teams or alone as a freelancer.</p>

            <p>Open to any new proposition, I am motivated and above all passionate about what I do.</p>
        </DisplayText>


        <DisplayImage xs={false} md={5}>


            <ParallaxImg
                bgImage={require("../images/aboutMe.png")}
                strength={-50}
                bgImageStyle={{
                    width: '90%',
                }} />


        </DisplayImage>


    </Container >
}