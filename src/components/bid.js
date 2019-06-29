import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel } from '@fortawesome/free-solid-svg-icons';

export default () => (
    <section id="bid-section">
        <h2 className="title">
			Current highest bid
        </h2>
        <p id="bid-value">
			2150€
        </p>
        <p className="bid-info">
         Company ID: 
            {' '}
            <strong>
               2
            </strong>
        </p>
        <p className="bid-info">
         Bid date: 
            {' '}
            <strong>
               12/7 at 12:24
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