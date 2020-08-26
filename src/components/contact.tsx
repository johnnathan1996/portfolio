import React from "react";
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

const Container = styled.div`
  height: 90vh;
  padding-top: 10vh
`;

const TitleContact = styled.h1`
    text-align: center;
    margin: 0 0 50px 0;
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
`

const InputButton = styled.a`
    background: #2c3e50;
    width: 100%;
    text-align: center;
    padding: 10px 30px;
    border-radius: 5px;
`;

export const Contact = () => {
    return <Container id="Contact">
        <TitleContact>
            Contact
        </TitleContact>

        <Grid>
            <Row center="xs">
                <InputCol xs={5}>
                    <InputForm type="text" placeholder="Prénom" />
                </InputCol>
                <InputCol xs={5}>
                    <InputForm type="text" placeholder="Nom" />
                </InputCol>
            </Row>
            <Row center="xs">
                <InputCol xs={10}>
                    <InputForm type="text" placeholder="Email" />
                </InputCol>
            </Row>
            <Row center="xs">
                <InputCol xs={10}>
                    <AreaForm placeholder="Message"/>
                </InputCol>
            </Row>
            <Row center="xs">
                <Col xs={1}>
                    <Row center="xs">
                        <Mailto email="johnkodokan@gmail.be" subject="Hello and Welcome" body="Hello world!">
                            Envoyer
                    </Mailto>
                    </Row>
                </Col>
            </Row>
        </Grid>

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