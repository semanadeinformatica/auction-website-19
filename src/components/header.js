import React from "react";
import { Container, Row, Col } from "reactstrap";

export default () => (
    <Container fluid>
        <Row id="header-wrapper">
            <Col>
                <h2 className="text-center">
                     Semana de Informática 2019
                </h2>
            </Col>
        </Row>
        <Row id="title-wrapper">
            <Col>
                <h1 className="text-center">
                    Main Sponsor Auction
                </h1>
                <p className="text-center">
                REGULATION: 
                    {' '} 
                    <a
                        href="docs/regulation-pt.pdf"
                        target="_blank"
                    >
                    PT
                    </a>
                    {' | '}
                    <a
                        href="docs/regulation-en.pdf"
                        target="_blank"
                    >
                    EN
                    </a>
                </p>
            </Col>
        </Row>
    </Container>
);