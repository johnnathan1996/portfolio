import React from "react";
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid'

const Container = styled.div`
    min-height: 93vh;
    padding-top: 7vh;
`;

const TitleWorks = styled.h1`
    text-align: center;
    margin: 20px 0 30px 0;

    ::after{
        content: "";
        background: #2c3e50;
        width: 4px;
        height: 4px;
        border-radius: 4px;
        position: absolute;
        left: CALC(50% - 2px);
        bottom: -6px;
    }
`;

const DisplayWorks = styled(Col)`
    height: 40vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
    display: flex !important;
    align-items: center;
    justify-content: center;

    :before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.5;
        transition: opacity 0.3s;
        cursor: pointer;
    }

    :hover:before{
        opacity: 0;
    }
`;

const WorksImages = styled.img`
    width: 50%;
`;

export const Works = () => {
    return <Container id="Works">
        <TitleWorks>
            Works
        </TitleWorks>

        <Row>
            <DisplayWorks xs={6} md={4} style={{ background: '#1D6FF7' }}>
                <WorksImages src={require('../images/work/gluon_logo.png')} alt="STEAM" />
            </DisplayWorks>
            <DisplayWorks xs={6} md={4} style={{ background: '#ffffff' }}>
                <WorksImages src={require('../images/work/bossuyt_logo.png')} alt="Bossuyt" />
            </DisplayWorks>
            <DisplayWorks xs={6} md={4} style={{ background: '#3c6382' }}>
                <WorksImages src={require('../images/work/lbn_logo.png')} alt="Lets be Nice" />
            </DisplayWorks>

            <DisplayWorks xs={6} md={4} style={{ background: '#ffffff' }}>
                <WorksImages src={require('../images/work/spielberg_logo.png')} alt="Spielberg" />
            </DisplayWorks>
            <DisplayWorks xs={6} md={4} style={{ background: '#829dcf' }}>
                <WorksImages src={require('../images/work/parked_logo.png')} alt="Parked" />
            </DisplayWorks>
            <DisplayWorks xs={6} md={4} style={{ background: '#ffffff' }}>
                <WorksImages src={require('../images/work/sobema_logo.png')} alt="Sobema" />
            </DisplayWorks>
            
        </Row>


    </Container>
}