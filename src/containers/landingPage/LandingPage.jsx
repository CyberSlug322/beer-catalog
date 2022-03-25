import React from "react";
import {Layout} from "../layout/Layout.jsx";
import './LandingPage.scss'
import { BeerListLoader } from "../beerList/BeerListLoader.jsx";

const LandingPage = () => ( 
    <Layout>
      <div className="landing-page">
        landing!
        <BeerListLoader/>
      </div> 
    </Layout> 

);

export default LandingPage;
