import React, {useState} from 'react';
import '../App.css';
import CampaignCard from './campaigncard.js';


const featuredcampaigns = () => {
    return(
        <div class="py-12 bg">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-left">
                <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Featured Campaigns
                </h3>
                <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500">
                    Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
                </div>
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
          
             
            </ul>
          </div>
        </div>
      </div>
    );
}

export default featuredcampaigns;