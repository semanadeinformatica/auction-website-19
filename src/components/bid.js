import React from "react";
import { Row, Col } from "reactstrap";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';

const Bid = ({data}) => (
    <>
        <Row id="bid-section">
            <Col>
                <h3 className="title text-center">
			Current highest bid
                </h3>
                <p
                    id="bid-value"
                    className="text-center"
                >
                    {data.value? `${data.value} €`: 'N/A'}
                </p>
                <div
                    id="bid-bottom"
                    className="justify-content-center justify-content-md-end pb-4 pb-md-0"
                >
                    <div id="bid-info">
                        <p className="text-center text-md-right">
                            <strong>
                            Company ID:
                            </strong> 
                            {' '}
                            {data.companyId? data.companyId : 'N/A'}
                        </p>
                        <p className="text-center text-md-right">
                            <strong>
                            Bid date:
                            </strong>
                            {' '}
                            {data.date? `${data.date} WEST` : 'N/A'}
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className="text-center">
                <a
                    id="bid-button"
                    className="btn btn-success"
                    color="success"
                    href="mailto:externas@sinf.pt?subject=Semana%20de%20Informática%20-%20Main%20Sponsor"
                > 
                    <FontAwesomeIcon
                        icon={faDonate}
                        size="lg"
                    />
                    <span>
                            BID
                    </span>
                </a>
            </Col>
        </Row>
        
    </>
);

Bid.propTypes = {
    data: PropTypes.any.isRequired
};

export default Bid;