import React from "react";

import Header from "../components/header";
import HighestBid from "../components/highest-bid";
import Content from "../components/content";
import Timer from "../components/Timer";

import '../components/layout.css';

export default () => (
    <> 
        <Header />
        <Content>
            <HighestBid />
            <Timer  />
        </Content>
    </>
);

