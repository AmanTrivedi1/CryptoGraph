import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <div className="bg-main_color-200 h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="bg-white border rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="sm:flex sm:flex-col sm:items-center py-16 flex flex-col items-start justify-start  ">
            {/* <img className="px-4 hidden md:block" src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png" alt="" /> */}
            <h1 className="text-8xl font-extrabold text-main_color-800 px-4  font-mono">
              404{" "}
            </h1>
            <h1 className="text-8xl px-4 font-extrabold text-main_color-600  font-mono>Found">
              Not Found
            </h1>
            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-main_color-800">
              OOPS!{" "}
            </h1>
            <p className="px-4 pb-10 text-base leading-none text-center text-main_color-600">
              No signal here! we cannot find the page you are looking for{" "}
            </p>
            <button
              className="mx-4 h-10 w-44 border rounded-md  text-main_color-600 bg-main_color-800 hover:bg-main_color-800 focus:outline-none focus:ring-2
                         focus:ring-opacity-50 focus:ring-main_color-800"
            >
              <NavLink to="/">Go Back </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
