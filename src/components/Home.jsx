import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../components/Images/Img-1.jpg";
import img2 from "../components/Images/Img-2.jpg";
import img3 from "../components/Images/Img-3.jpg";
import img4 from "../components/Images/Img-4.jpg";
import img5 from "../components/Images/Img-5.jpg";
import img6 from "../components/Images/Img-6.jpg";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="lg:px-20 md:px-6 bg-main_color-1000 pt-20 px-4 md:py-12 py-8">
      <div className="lg:flex items-center justify-between">
        <div className="lg:w-1/3">
          <h1 className="text-5xl  leading-9 text-main_color-800 uppercase font-bold">
            Crypto Graph
          </h1>
          <p className="text-lg leading-6 mt-4 text-gray-600">
            The Only Website which you need to track any crypto Coin You Can
            track as well as get direct link to BUy That Coin You will also get
            the live Chart to make your decision wise and well
          </p>
          <button className="focus:ring-2 focus:ring-offset-2 focus:ring-main_color-600 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-main_color-600 flex items-center justify-center hover:underline">
            View Catalogue
            <AiOutlineArrowRight />
          </button>
        </div>
        <div className="lg:w-7/12 lg:mt-0 mt-8">
          <div className="w-full h-full bg-red-200">
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              showStatus={false}
              showArrows={false}
              interval={1000}
            >
              <div>
                <img
                  className="w-full sm:block hidden"
                  src={img1}
                  alt="Main Img"
                />
              </div>
              <div>
                <img
                  className="w-full sm:block hidden"
                  src={img2}
                  alt="Main Img"
                />
              </div>
              <div>
                <img
                  className="w-full sm:block hidden"
                  src={img3}
                  alt="Main Img"
                />
              </div>
              <div>
                <img
                  className="w-full sm:block hidden"
                  src={img4}
                  alt="Main Img"
                />
              </div>
            </Carousel>
          </div>
          <div className="grid sm:grid-cols-2 rounded-md md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              showStatus={false}
              showArrows={false}
              interval={1000}
            >
              <div className="rounded-md">
                <img
                  className="w-full rounded-md sm:block hidden"
                  src={img1}
                  alt="Main Img"
                />
              </div>
              <div className="rounded-md">
                <img
                  className="w-full rounded-md sm:block hidden"
                  src={img2}
                  alt="Main Img"
                />
              </div>
              <div className="rounded-md">
                <img
                  className="w-full rounded-md sm:block hidden"
                  src={img4}
                  alt="Main Img"
                />
              </div>
              <div className="rounded-md">
                <img
                  className="w-full rounded-md sm:block hidden"
                  src={img5}
                  alt="Main Img"
                />
              </div>
              <div className="rounded-md">
                <img
                  className="w-full rounded-md sm:block hidden"
                  src={img6}
                  alt="Main Img"
                />
              </div>
            </Carousel>

            <img src={img3} className="w-full rounded-md" alt="sitting room" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
