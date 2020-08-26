import React from "react";
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid'

const Container = styled.div`
    height: 93vh;
    padding-top: 7vh;
`;

const TitleWorks = styled.h1`
    text-align: center;
    margin: 20px 0 30px 0;
`;

const DisplayWorks = styled(Col)`
    height: 40vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    :before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: black;
        opacity:0.5;
        top: 100%;
        transition: top 0.3s;$
        cursor: pointer;
    }

    :hover:before{
        top: 0;
    }

    :hover figcaption{
        opacity: 1;
    }
`;

const WorksImages = styled.img`
    width: 100%;
    object-fit: cover;
    height: 310px;
`;

const WorksFigcaption = styled.figcaption`
    position: absolute;
    opacity: 0;
    top: 20vh;
    color: white;
    width: 100%;
    text-align: center;
    transition: opacity 0.2s;
`;




export const Works = () => {
    return <Container id="Works">
        <TitleWorks>
            Works
        </TitleWorks>

        <Row>

            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/1.jpg')} alt="STEAM" />
                <WorksFigcaption>STEAM</WorksFigcaption>
            </DisplayWorks>
            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/2.jpg')} alt="Bossuyt" />
                <WorksFigcaption>Bossuyt</WorksFigcaption>
            </DisplayWorks>
            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/3.jpg')} alt="Lets be Nice" />
                <WorksFigcaption>Lets be Nice</WorksFigcaption>
            </DisplayWorks>
            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/4.jpg')} alt="Spielberg" />
                <WorksFigcaption>TFE</WorksFigcaption>
            </DisplayWorks>

            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/5.jpg')} alt="Sobema" />
                <WorksFigcaption>Sobema</WorksFigcaption>
            </DisplayWorks>
            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/6.jpg')} alt="Flutter" />
                <WorksFigcaption>Flutter</WorksFigcaption>
            </DisplayWorks>
            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/7.jpg')} alt="MediaCollect" />
                <WorksFigcaption>MediaCollect</WorksFigcaption>
            </DisplayWorks>
            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/7.jpg')} alt="MediaCollect" />
                <WorksFigcaption>MediaCollect</WorksFigcaption>
            </DisplayWorks>

        </Row>


    </Container>
}