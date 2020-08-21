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
Background: red;
height: 20px;
margin: 10px 0;
`;

export const Contact = () => {
    return <Container>
        <TitleContact>
            Contact
        </TitleContact>

        <Grid>
            <Row>
                <InputCol xs={6}>Prenom</InputCol>
                <InputCol xs={6}>Nom</InputCol>
            </Row>
            <Row>
                <InputCol xs={12}>email</InputCol>
            </Row>
            <Row>
                <InputCol xs={12}>Message</InputCol>
            </Row>
            <Row>
                <InputCol xs={12}>
                    <Mailto email="johnkodokan@gmail.be" subject="Hello and Welcome" body="Hello world!">
                        Envoyer
                    </Mailto>
                </InputCol>
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
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{props.children}</a>
    );
}