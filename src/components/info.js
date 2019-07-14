import React from "react";
import { Container, Row, Col } from "reactstrap";

import PropTypes from "prop-types";

const Info = ({end, update}) => (
    <>
        <Container id="info">
            <Row>
                <Col>
                    <h3 className="title text-center">
					End date
                    </h3>
                    <p className="text-center">
                        {new Date(end).toUTCString()}
                    </p>
                </Col>
                <Col>
                    <h3 className="title text-center">
					Last update
                    </h3>
                    <p className="text-center">
                        {new Date(update).toUTCString()}
                    </p>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row>
                <Col
                    id="disclaimer"
                    className="text-center"
                >
                    <strong>
						Disclaimer:
                    </strong>
                    {' '}
					This is not a live website. The information is correct as of the date presented as 
                    {' '}
                    <strong>
						Last update
                    </strong>
					. Please refresh the website to get the latest information.
                </Col>
            </Row>
        </Container>
    </>
);

Info.propTypes = {
    update: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
};

export default Info;