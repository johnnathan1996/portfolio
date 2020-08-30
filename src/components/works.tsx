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
    font-weight: bold;

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
`;

const WorksImages = styled.img`
    width: 50%;
`;
const ImageLink = styled.a`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

    :before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.2;
        transition: opacity 0.3s;
        cursor: pointer;
    }

    :hover:before{
        opacity: 0;
    }
`

export const Works = () => {
    return <Container id="Works">
        <TitleWorks>
            Works
        </TitleWorks>

        <Row>

            <DisplayWorks xs={6} md={4} style={{ background: '#1D6FF7' }}>
                <ImageLink href="http://johnmichielsens.be/Works/RGB/" target="_blank">
                    <WorksImages src={require('../images/work/gluon_logo.png')} alt="STEAM" />
                </ImageLink>
            </DisplayWorks>

            <DisplayWorks xs={6} md={4} style={{ background: '#ffffff' }}>
                <ImageLink href="https://www.bakkerij-bossuyt.be/" target="_blank">
                    <WorksImages src={require('../images/work/bossuyt_logo.png')} alt="Bossuyt" />
                </ImageLink>
            </DisplayWorks>

            <DisplayWorks xs={6} md={4} style={{ background: '#3c6382' }}>
                <ImageLink href="http://johnmichielsens.be/Works/lbn/" target="_blank">
                    <WorksImages src={require('../images/work/lbn_logo.png')} alt="Lets be Nice" />
                </ImageLink>
            </DisplayWorks>

            <DisplayWorks xs={6} md={4} style={{ background: '#ffffff' }}>
                <ImageLink href="http://johnmichielsens.be/Works/popup/" target="_blank">
                    <WorksImages src={require('../images/work/spielberg_logo.png')} alt="Spielberg" />
                </ImageLink>
            </DisplayWorks>

            <DisplayWorks xs={6} md={4} style={{ background: '#829dcf' }}>
                <ImageLink href="https://github.com/johnnathan1996/Parked" target="_blank">
                    <WorksImages src={require('../images/work/parked_logo.png')} alt="Parked" />
                </ImageLink>
            </DisplayWorks>

            <DisplayWorks xs={6} md={4} style={{ background: '#ffffff' }}>
                <ImageLink href="http://www.sobema.be/" target="_blank">
                    <WorksImages src={require('../images/work/sobema_logo.png')} alt="Sobema" />
                </ImageLink>
            </DisplayWorks>

        </Row>


    </Container>
}