import React from "react";
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

const Container = styled.div`
    height: 80vh;
    padding-top: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TitleContact = styled.h1`
    text-align: center;
    margin: 0 0 50px 0;
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

const InputCol = styled(Col)`
    margin: 10px 0;
    padding: 0 10px;
`;

const InputForm = styled.input`
    padding: 10px 1%;
    border-radius: 4px;
    border: 1px solid #EEE;
    width: 98%;
    -webkit-appearance: none;
    font-family: montserrat;
`

const AreaForm = styled.textarea`
    padding: 10px 1%;
    border-radius: 4px;
    border: 1px solid #EEE;
    width: 98%;
    -webkit-appearance: none;
    max-height: 200px;
    min-height: 90px;
    min-width: 98%;
    max-width: 98%;
    font-family: montserrat;
`

const InputButton = styled.a`
    background: #2c3e50;
    width: 100%;
    text-align: center;
    padding: 10px 30px;
    border-radius: 5px;
`;

const Footer = styled.footer`
    background: #2c3e50;
`

const FooterContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        color: white;
        font-size: 12px;
    }
`

const IconImg = styled.img`
    width: 15px;
    margin-left: 10px;

`

const FooterList = styled.ul`
    display: flex;
`

export const Contact = () => {
    return <Container id="Contact">
        <div>
            <TitleContact>
                Contact
        </TitleContact>

            <Grid>
                <Row center="xs">
                    <InputCol xs={6} md={5}>
                        <InputForm type="text" placeholder="First name" />
                    </InputCol>
                    <InputCol xs={6} md={5}>
                        <InputForm type="text" placeholder="Last name" />
                    </InputCol>
                </Row>
                <Row center="xs">
                    <InputCol xs={12} md={10}>
                        <InputForm type="text" placeholder="Email" />
                    </InputCol>
                </Row>
                <Row center="xs">
                    <InputCol xs={12} md={10}>
                        <AreaForm placeholder="Message" />
                    </InputCol>
                </Row>
                <Row center="xs">
                    <Col xs={1}>
                        <Row center="xs">
                            <Mailto email="johnkodokan@gmail.be" subject="Hello and Welcome" body="Hello world!">
                                Send
                    </Mailto>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </div>

        <Footer>
            <FooterContainer>
                <p>Copyright © 2020 | Portfolio of John-Nathan Michielsens</p>
                <FooterList>
                    <a href="https://www.facebook.com/johnnathan.michielsens1" target="_blank">
                        <li>
                            <IconImg alt="icon" src={require('../images/svg/facebook-logo.svg')} />
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/john-nathan-michielsens/" target="_blank">
                        <li>
                            <IconImg alt="icon" src={require('../images/svg/linkedin-sign.svg')} />
                        </li>
                    </a>
                    <a href="https://github.com/johnnathan1996" target="_blank">
                        <li>
                            <IconImg alt="icon" src={require('../images/svg/github-logo.svg')} />
                        </li>
                    </a>
                </FooterList>
            </FooterContainer>
        </Footer>

    </Container>
}


function Mailto({ email, subject, body, ...props }: {
    [x: string]: any;
    email: string;
    subject: string;
    body: string;
}) {
    return (
        <InputButton href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{props.children}</InputButton>
    );
}