import React from "react";
import { Container, Row, Col } from "reactstrap";

import PropTypes from "prop-types";

const Info = ({end, update}) => (
    <Container id="info">
        <Row>
            <Col>
                <h3 className="title text-center">
					End date
                </h3>
                <p className="text-center">
                    {end}
                </p>
            </Col>
            <Col>
                <h3 className="title text-center">
					Last update
                </h3>
                <p className="text-center">
                    {update}
                </p>
            </Col>
        </Row>
    </Container>
);

Info.propTypes = {
    update: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
};

export default Info;