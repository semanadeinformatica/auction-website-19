import React from "react";
import { Container } from "reactstrap";
import PropTypes from 'prop-types';

const Content = ({children}) => (
    <Container fluid>
        {children}
    </Container>
);

Content.propTypes = {
    children: PropTypes.any.isRequired
};

export default Content;