import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Header from "../components/header";
import Bid from "../components/bid";
import Content from "../components/content";
import Info from "../components/info";
import Helmet from "react-helmet";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/layout.css';

const Index = ({data}) => (
    <>
        <Helmet title="SINF Auction" />
        <Header />
        <Content>
            <Bid data={data.allDataJson.edges[0].node.bid} />
            <Info
                end={data.allDataJson.edges[0].node.endDate}
                update={data.allDataJson.edges[0].node.update}
            />
        </Content>
    </>
);

Index.propTypes = {
    data: PropTypes.any.isRequired
};

export const query = graphql`
    query DataQuery {
        allDataJson {
        edges {
            node {
                bid {
                value
                companyId
                date
            } 
            update
            endDate
            }
        }
        }
    }  
`;

export default Index;
