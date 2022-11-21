import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { SiDiscord } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";
const Footer = () => {
  return (
    <>
<section class="bg-main_color-1000 ">
    <div class="max-w-screen-full py-4  mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div class="flex justify-center mt-2 space-x-6">
            <BsInstagram className='text-main_color-800 text-2xl cursor-pointer
              transition ease-in-out delay-150  rounded-sm hover:-translate-y-1 hover:scale-110  duration-300
            hover:text-main_color-600'/>

           <FiTwitter  className='text-main_color-800 text-2xl cursor-pointer
              transition ease-in-out delay-150  rounded-sm hover:-translate-y-1 hover:scale-110  duration-300
            hover:text-main_color-600'/>

           <CiLinkedin  className='text-main_color-800 text-3xl cursor-pointer
              transition ease-in-out delay-150  rounded-sm hover:-translate-y-1 hover:scale-110  duration-300
            hover:text-main_color-600'/>
           <SiDiscord  className='text-main_color-800 text-3xl cursor-pointer
              transition ease-in-out delay-150  rounded-sm hover:-translate-y-1 hover:scale-110  duration-300
            hover:text-main_color-600'/>
            
        </div>
        <p class="mt-2 text-base leading-6 text-center flex items-center justify-center text-main_color-600">
            Made With <span> <AiOutlineHeart  className='text-main_color-800 text-3xl cursor-pointer
              transition ease-in-out delay-150  rounded-sm hover:-translate-y-1 hover:scale-110  duration-300
            hover:text-main_color-600'/></span> by Aman Trivedi
        </p>
    </div>
</section>
    </>
  )
}

export default Footer