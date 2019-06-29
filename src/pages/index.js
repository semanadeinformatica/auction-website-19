import React from "react";

import Header from "../components/header";
import Bid from "../components/bid";
import Content from "../components/content";
import Timer from "../components/Timer";

import '../components/layout.css';

export default () => (
    <> 
        <Header />
        <Content>
            <Bid />
            <Timer  />
        </Content>
    </>
);

