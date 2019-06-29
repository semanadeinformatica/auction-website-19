import React from "react";

import Header from "../components/header";
import Bid from "../components/bid";
import Content from "../components/content";
import Timer from "../components/timer";
import Update from "../components/update";

import '../components/layout.css';

export default () => (
    <> 
        <Header />
        <Content>
            <Bid />
            <Timer  />
            <Update />
        </Content>
    </>
);

