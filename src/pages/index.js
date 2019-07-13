import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Header from "../components/header";
import Bid from "../components/bid";
import Content from "../components/content";
import Timer from "../components/timer";
import Update from "../components/update";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/layout.css';

const Index = ({data}) => (
    <> 
        <Header />
        <Content>
            <Bid data={data.allDataJson.edges[0].node.bid} />
            <Timer data={data.allDataJson.edges[0].node.bid} />
            <Update date={data.allDataJson.edges[0].node.update}/>
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
            }
        }
        }
    }  
`;

export default Index;
