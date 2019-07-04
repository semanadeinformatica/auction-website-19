import React from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel } from '@fortawesome/free-solid-svg-icons';

const Bid = ({data}) => (
    <section id="bid-section">
        <h2 className="title">
			Current highest bid
        </h2>
        <p id="bid-value">
            {data.value}
            €
        </p>
        <p className="bid-info">
         Company ID: 
            {' '}
            <strong>
                {data.companyId}
            </strong>
        </p>
        <p className="bid-info">
         Bid date: 
            {' '}
            <strong>
                {data.date}
            </strong>
        </p>
        <a
            href="mailto:externas@sinf.pt"
            id="bid-button"
        >
            <FontAwesomeIcon
                size="lg"
                icon={faGavel}
            />
            <span>
               MAKE A BID
            </span>
        </a>
    </section>
);

Bid.propTypes = {
    data: PropTypes.any.isRequired
};

export default Bid;