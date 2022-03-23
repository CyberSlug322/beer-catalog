import React from "react";
import {Layout} from "../layout/Layout.jsx";
import {BeerList} from "../beerList/BeerList.jsx";
import './LandingPage.scss'

const LandingPage = () => ( 
    <Layout>
      <div className="landing-page">
        landing!
        <BeerList/>
      </div> 
    </Layout> 

);

export default LandingPage;
