import React from 'react';



const Footer = () => {
    return(
        <div class="w-full bg-gray-800">
            <div class="flex flex-wrap text-center text-white">


                <div class="w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left">
                <div class="my-6 ml-3 text-xl font-semibold">ABOUT US</div>
                    <ul class="px-5">
                        <li><a href="/about/whatwedo" >What We Do</a> </li>
                        <li><a href="/blog" >Blog</a> </li>
                        <li><a href="/about/trust" >Trust and Safety</a> </li>
                        <li><a href="/about/help" >Help and Support</a> </li>
                        <li><a href="/about/press" >Press</a> </li>
                        <li><a href="/about/careers" >Careers</a> </li>
                        <li><a href="/about/contact" >Contact</a> </li>
                       
                    </ul>
                </div>

                

                <div class="w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left">
                <div class="my-6 ml-3 text-xl font-semibold">ENTREPRENEURS</div>
                <ul class="px-5">
                        <li><a href="/entrepreneurs/howitworks" >How it Works</a></li>
                        <li><a href="/entrepreneurs/education" >Education Center</a></li>
                        <li><a href="/entrepreneurs/help" >Help and Support</a></li>
                        <li><a href="/entrepreneurs/fees" >Fees</a></li>
                    </ul>
                
                </div>

                

                <div class="w-full md:w-1/3 p-5">
                <div class="mt-6 text-xl font-semibold">SAY HELLO!</div>
                <form class="w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded" >
                    
                    <div class="flex items-center mb-4 ">
                    <input class="rounded-lg w-full h-10 p-2 border-b border-blue-800 bg-gray-700 text-white" type="text" placeholder="Email"/>
                    </div>
                    <div class="mb-6 ">
                    <textarea class="rounded-lg w-full h-15 px-2 pt-2 border-b-2 border-blue-800 bg-gray-700 text-white" placeholder="Message"></textarea>
                    </div>
                    <div class="flex justify-between items-center">
                    <button class="w-full py-2 px-4 rounded-lg bg-yellow-500 hover:bg-yellow-700 text-white font-bold" type="button">SEND</button>
                    </div>
                </form>
                </div>

            </div>
        </div>

    );
}
      
export default Footer;