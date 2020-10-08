import React from 'react';
import Header from '../components/header.js';
import Featured from '../components/featuredcampaigns.js';
import Hero from '../images/hero.jpg';




const LandingScreen = () => {
	return(
		<>
			<Header identity="1"/>
			<div class="flex relative w-full bg-black ">
				<div class="flex-1 relative my mx-20 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-28">
					<div class="sm:text-center lg:text-left">
						<h2 class="text-3xl tracking-normal leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
							Launch or support products  through
							<span class="text-indigo-600"> SeriesZero</span>
						</h2>
						<p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
							Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
						</p>
						<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
							<div class=" rounded-md shadow-inner">
								<a href="/allcampaigns" class="w-full flex items-center justify-center px-8 py border border-transparent text-base leading-6 font-small rounded-md text-white bg-gray-800 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
									Find Campaigns
								</a>
							</div>
							<div class="mt-3 sm:mt-0 sm:ml-3">
								<a href="/newcampaign" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
									Start your campaign
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="flex-1 relative inset-0  ">
					<img class="object-cover" src={Hero} alt="" />
				</div>
				
				
				
			</div>
			
			<Featured />
			

			<br/>
		</>
  );
};

export default LandingScreen;