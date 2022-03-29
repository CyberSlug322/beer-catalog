import React,{ useState } from "react";
import {Layout} from "../layout/Layout.jsx";
import './LandingPage.scss'
import { SearchBlock } from "../search/SearchBlock.jsx";
import { BeerListLoader } from "../beerList/BeerListLoader.jsx";


const LandingPage = () => {
  const [searchTerms, setSearchTerms] = useState({
    input:{text: ''},
    alcoholVolume: 0,
    IBU: 0,
    EBC: 0,
  })

  const onInputChange = (value) => setSearchTerms({...searchTerms, input: {text: value}})
  const onAlcVolumeChange = (value) => setSearchTerms({...searchTerms, alcoholVolume: value})
  const onIbuChange = (value) => setSearchTerms({...searchTerms, IBU: value})
  const onEbcChange = (value) => setSearchTerms({...searchTerms, EBC: value})
  console.log(searchTerms)
  return( 
    <Layout>
      <div className="landing-page">
        <SearchBlock 
          onInputChange={onInputChange}
          onIbuChange={onIbuChange}
          onAlcVolumeChange={onAlcVolumeChange}
          onEbcChange={onEbcChange}
          className="landing-page__search-block"         
        />
        <BeerListLoader 
         input={searchTerms.input} 
         alcoholVolume={searchTerms.alcoholVolume} 
         IBU={searchTerms.IBU} 
         EBC={searchTerms.EBC}/>
      </div> 
    </Layout> 

)};

export default LandingPage;
