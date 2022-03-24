import React from "react";
import {Layout} from "../layout/Layout.jsx";
import {BeerList} from "../beerList/BeerList.jsx";
import './LandingPage.scss'
import { Search } from "../search/Search.jsx";

const LandingPage = () => ( 
    <Layout>
      <div className="landing-page">
        <Search/>
        landing!
        <BeerList/>
      </div> 
    </Layout> 

);

export default LandingPage;
