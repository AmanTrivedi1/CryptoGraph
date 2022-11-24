import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img4 from "../components/Images/Img-4.jpg";

import CoinDetails from "./CoinDetails";
import Coins from "./Coins";
import Exchanges from "./Exchanges";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="bg-main_color-200 pt-20">
    <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 pb-10 2xl:mx-auto 2xl:container">
        <div className="z-30 relative lg:w-1/2">
            <div className="hidden  bg-main_color-600 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
                <div className="w-full lg:w-auto lg:-mr-32">
                    <img src={img4} alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 px-6 py-14" />
                </div>
            </div>
            <div className="absolute top-0  bg-main_color-600 md:h-96 w-full hidden md:block lg:hidden"></div>
            <div className="w-full h-full lg:hidden">
                <img src={img4} alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14" />
            </div>
        </div>
        <div className=" lg:w-1/2 lg:ml-12 lg:p-14 bg-main_color-600 p-8 flex items-center">
            <div className="">
                <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-main_color-200 capitalize"> Live Crypto Chart 
               </h1>
                <p className="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-main_color-200 mt-5">TradingView is by far the most popular charting and technical analysis tool for traders of all markets.
                 In recent years, they have pushed to integrate their tool set with the most popular cryptocurrency exchanges and the results are impressive.

                </p>
                <button className=" rounded-sm dark:hover:bg-main_color-200 
                dark:hover:text-main_color-600  sm:w-auto w-full mt-8
                 text-main_color-200 justify-between  focus:ring-offset-2  focus:outline-none
                   font-medium leading-none   border-2 border-main_color-200  hover:text-main_color-1000 hover:bg-main_color-200 duration-700  py-4 px-8  flex items-center">
                    Swipe Down
                    <div className="ml-2 mt-0.5">
                    <AiOutlineArrowDown/>
                    </div>
                </button>
            </div>
        </div>
    </div>
    <Exchanges/>
    <Footer/>
</div>
  );
};

export default Home;
