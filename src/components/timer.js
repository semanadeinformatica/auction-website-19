import React from "react";
import { PropTypes } from "prop-types";

const calculateDate = (bidDate) => {
    return bidDate; // calculate when is the end date
};

const Timer = ({data}) => {
    const endDate = calculateDate(data.date);
    return (
        <section id="date-section">
            <h2 className="title">
                End date
            </h2>
            <p id="end-date">
                {endDate}
            </p>
        </section>
    );
};

Timer.propTypes = {
    data: PropTypes.any.isRequired
};

export default Timer;