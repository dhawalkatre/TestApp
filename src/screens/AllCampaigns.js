import React, {useState} from 'react';
import '../App.css';
import CampaignCard from '../components/campaigncard.js';
import Allcampaignscontainer from '../components/allcampaignscontainer.js';
import Header from '../components/header.js';


const allCampaigns = () => {
    return(
        <>
        <Header identity="2"/>
        <div class="bg-white">
            <div class="main ">
                <div class="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                    <div class="hero">
                        
                        <div class="hero-headline flex flex-col items-center justify-center pt-24 text-center">
                            <h1 class=" font-bold text-3xl text-gray-900">Our Campaigns Catalog</h1>
                            <p class=" font-base text-base text-gray-600">Find all the campaigns from innovative companies from around the nation.</p>
                        </div>

                        <div class="box pt-6">
                            <div class="box-wrapper">

                                <div class=" bg-white rounded-full flex items-center w-full p-3 shadow-xl border border-gray-100">
                                <button  class="outline-none focus:outline-none"><svg class=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                                <input type="search" name="" id=""  placeholder="search for images" x-model="q" class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"/>
                                <div class="select">
                                    <select name="" id="" x-model="image_type" class="text-sm outline-none focus:outline-none bg-transparent">
                                    <option value="all" selected>All</option>
                                    <option value="photo">Transport</option>
                                    <option value="illustration">Tech</option>
                                    <option value="vector">Lifestyle</option>
                                    </select>
                                </div>
                                </div>
                            
                            </div>
                        </div>

                        <section id="photos" class="my-5 grid grid-cols-1 md:grid-cols-4 gap-4">
                            <template x-for="image in images" >
                            <a  class="hover:opacity-75 " target="_new"><img class="w-full h-64 object-cover" src="image.largeImageURL"  alt="image.tags" /></a>
                            </template>
                        </section>

                    </div>
                </div>
            </div>

            <main>
                <div class="max-w-7xl mx-auto py sm:px-6 lg:px-8">                    
                    <Allcampaignscontainer />
                </div>
            </main>
        </div>
        
        </>

    );
}

export default allCampaigns;