import React from "react";
import styled from 'styled-components';
import { Col } from 'react-styled-flexboxgrid'
import { Parallax } from 'react-parallax';

const Container = styled.div`
    height: 80vh;
    width: 1024px;
    margin: 0 auto;
    padding: 10vh 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


const DisplayText = styled(Col)`
    line-height: 30px;
    color: rgb(100,100,100);
    font-family: 'Montserrat';
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


export const About = () => {
    return <Container id="About">



        <DisplayText xs={5} >

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing
        </DisplayText>


        <DisplayImage xs={5} >


            <ParallaxImg
                bgImage={require("../images/aboutMe.png")}
                strength={-50}
                bgImageStyle={{
                    width: '90%',
                }} />


        </DisplayImage>


    </Container >
}