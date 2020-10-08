import React, {useState} from 'react';
import '../App.css';
import CampaignCard from './campaigncard.js';


const allcampaignscontainer = () => {
    return(
        <div class="py-12 bg">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="mt-10 hover:scale-125">
            <ul class="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 ">
              <li class="">
                    <CampaignCard/>
              </li>
              <li>
                    <CampaignCard/>
              </li>
              <li>
                    <CampaignCard/>
              </li>
              <li class="f">
                    <CampaignCard />
              </li>
              <li>
                    <CampaignCard/>
              </li>
              <li>
                    <CampaignCard/>
              </li>
              <li class="focus:tranform scale-100">
                    <CampaignCard/>
              </li>
              <li>
                    <CampaignCard/>
              </li>
              <li>
                    <CampaignCard/>
              </li>
          
             
            </ul>
          </div>
        </div>
      </div>
    );
}

export default allcampaignscontainer;