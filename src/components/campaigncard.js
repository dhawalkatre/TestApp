import React, {useState} from 'react';
import '../App.css';
import cardimage from '../images/product image.jpg';


const campaigncard = () => {
    return(
        <div class="">
            <a href="/campaignscreen" >
            <div class="relative rounded-lg overflow-hidden">
                <img class="h-64 w-100 object-cover shadow-lg" src = {cardimage} alt="product image 1" />
            </div>
            
            <div class="relative px -mt-12">
                <div class="p-6 bg-white text-black rounded-lg shadow-xl">
                    <h3 class="font-semibold text-lg">Product Title</h3>
                    <h4 class="text-gray-700">Company Name</h4>

                    <div class="text-sm">
                        <p>Lorem ipsum dolor sit amet, sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
                    </div>

                    <div class="mt-8 inline-block bg-blue-200 text-blue-600 text-xs px-2 rounded-full uppercase semibold tracking-wide">
                        Transport
                    </div>
                    
                    <div class="mt-2 w-full rounded">
                        <div class="w-full">
                            <span class="text-m text-bold" >₹69,000</span>
                            <span class="ml-1 text-xs text-gray-600">raised</span>
                            
                        </div>
                        <div class="h-3 relative max-w-xl rounded-full overflow-hidden ">
                            <div class="w-full h-full bg-gray-200 absolute shadow-inner"></div>
                            <div class="h-full bg-green-400 absolute" style={{width: "69%"}} ></div>

                        </div>
                    </div>
                        
                    
                </div>
            </div>
            </a>
           
            
        </div>
    );
}

export default campaigncard;