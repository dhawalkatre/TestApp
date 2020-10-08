import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingScreen from './LandingScreen.js';
import CampaignsScreen from './CampaignsScreen.js';
import AuthScreen from './AuthScreen.js';
import Footer from '../components/Footer.js';
import BackerScreen from './BackerScreen.js'
import NewCampaignScreen from './NewCampaignScreen.js';
import AllCampaigns from './AllCampaigns.js';



function Navigator() {
  return (
    <div>
      <BrowserRouter>
        <div>
          
          <Route exact path="/" component={LandingScreen} />
          <Route exact path="/campaignscreen" component={CampaignsScreen} />
          <Route exact path="/backer" component={BackerScreen} />
          <Route exact path="/auth" component={AuthScreen} />
          <Route exact path="/newcampaign" component={NewCampaignScreen} />
          <Route exact path="/allcampaigns" component={AllCampaigns} />
          
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Navigator;
