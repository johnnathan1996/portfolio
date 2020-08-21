import React from "react";
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid'

const Container = styled.div`
  height: 100vh;
`;

const TitleWorks = styled.h1`
    text-align: center;
    margin: 0 0 50px 0;
`;

const DisplayWorks = styled(Col)`
    height: 310px;
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
`;

const WorksImages = styled.img`
    width: 100%;
    object-fit: cover;
    height: 310px;
`;


export const Works = () => {
    return <Container>
        <TitleWorks>
            Works
        </TitleWorks>

        <Row>

            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/1.jpg')} alt="STEAM" />
            </DisplayWorks>
            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/2.jpg')} alt="Bossuyt" />
            </DisplayWorks>
            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/3.jpg')} alt="Lets be Nice" />
            </DisplayWorks>
            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/4.jpg')} alt="Spielberg" />
            </DisplayWorks>

            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/5.jpg')} alt="Sobema" />
            </DisplayWorks>
            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/6.jpg')} alt="Flutter" />
            </DisplayWorks>
            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/7.jpg')} alt="MediaCollect" />
            </DisplayWorks>
            <DisplayWorks xs={3} >
                <WorksImages src={require('../images/work/7.jpg')} alt="MediaCollect" />
            </DisplayWorks>

        </Row>


    </Container>
}