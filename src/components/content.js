import React from "react";
import PropTypes from 'prop-types';

const Content = ({children}) => (
    <div id="content">
        {children}
    </div>
);

Content.propTypes = {
    children: PropTypes.element.isRequired
};

export default Content;