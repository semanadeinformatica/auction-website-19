import React from "react";
import { Row, Col } from "reactstrap";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';

const Bid = ({data}) => (
    <Row id="bid-section">
        <Col>
            <h2 className="title text-center">
			Current highest bid
            </h2>
            <p
                id="bid-value"
                className="text-center"
            >
                {data.value}
            €
            </p>
            <div id="bid-bottom">
                <div id="bid-button">
                    <a
                        className="btn btn-success"
                        color="success"
                        href="mailto:externas@sinf.pt?subject=[AUCTION] New Bid"
                    > 
                        <FontAwesomeIcon
                            icon={faDonate}
                            size="lg"
                        />
                        <span>
                            BID
                        </span>
                    </a>
                </div>
                <div id="bid-info">
                    <p>
                        <strong>
                            Company ID:
                        </strong> 
                        {' '}
                        {data.companyId}
                    </p>
                    <p>
                        <strong>
                            Bid date:
                        </strong>
                        {' '}
                        {data.date}
                    </p>
                </div>
            </div>
            
        </Col>
        
    </Row>
);

Bid.propTypes = {
    data: PropTypes.any.isRequired
};

export default Bid;