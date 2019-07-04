import React from "react";
import { PropTypes } from "prop-types";

const LastUpdate = ({date}) => (
    <section id="update-section">
        <h2 className="title">
			Last update
        </h2>
        <p id="end-date">
            {date}
        </p>
    </section>
);

LastUpdate.propTypes = {
    date: PropTypes.any.isRequired
};

export default LastUpdate;