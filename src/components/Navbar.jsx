import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(null);
  // const [profile, setProfile] = useState(false);
  return (
    <>
      <div className="bg-main_color-600 h-full w-full">
        {/* Code block starts */}
        <nav className="shadow xl:block hidden ">
          <div className="mx-auto container px-6 py-2 xl:py-0">
            <div className="flex items-center justify-between">
              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <div className="flex flex-row items-center ">
                  <p className="font-bold text-xl text-main_color-800 uppercase">
                    Crypto <span className="text-main_color-200">Graph</span>{" "}
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="hidden xl:flex md:mr-6 xl:mr-16">
                  <div className="flex px-5 items-center py-6 text-md leading-5 text-main_color-800 hover:bg-main_color-800 hover:text-main_color-600 focus:bg-gray-100 focus:outline-none transition duration-700 ease-in-out">
                    <NavLink to="/">Home</NavLink>
                  </div>

                  <div className="flex px-5 items-center py-6 text-md leading-5 text-main_color-800 hover:bg-main_color-800 hover:text-main_color-600 focus:bg-gray-100 focus:outline-none transition duration-700 ease-in-out">
                    <NavLink to="/Coins">Coins</NavLink>
                  </div>

                  <div className="flex px-5 items-center py-6 text-md leading-5 text-main_color-800 hover:bg-main_color-800 hover:text-main_color-600 focus:bg-gray-100 focus:outline-none transition duration-700 ease-in-out">
                    <NavLink to="/Exchanges">Exchange Coins</NavLink>
                  </div>
                </div>
                <div className="hidden xl:flex items-center"></div>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div className="py-4 px-6 w-full h-14 flex xl:hidden justify-between items-center bg-main_color-800 fixed top-0 z-40">
            <div className="w-24">
              <div className="flex flex-row items-center ">
                <p className="font-bold text-xl text-main_color-600 uppercase">
                  Crypto <span className="text-main_color-200">Graph</span>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div
                id="menu"
                className="text-main_color-600"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <GiHamburgerMenu className="text-2xl text-main_color-600" />
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full xl:hidden h-full absolute z-40  transform   duration-700 translate-x-0 "
                : "   w-full xl:hidden h-full absolute z-40   duration-700 transform -translate-x-full"
            }
          >
            <div
              className="bg-main_color-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40 fixed overflow-y-auto  top-0 bg-main_color-600 shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-700 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div className="">
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <div className="flex flex-row items-center ">
                            <p className="font-bold text-xl text-main_color-800 uppercase">
                              {/* Crypto{" "} */}
                              <span className="text-main_color-200">Graph</span>{" "}
                            </p>
                          </div>
                        </div>
                        <div id="cross" onClick={() => setShow(!show)}>
                          <AiOutlineClose className="text-2xl  cursor-pointer text-main_color-800" />
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      {/* <a className="cursor-pointer"> */}
                      <li className="text-main_color-800 pt-10">
                        <div className="w-full h-full md:w-full  md:h-full text-main_color-800">
                          <p className="text-main_color-1000  text-md duration-700 p-2 ease-in-out hover:text-main_color-1000 bg-main_color-800 hover:bg-main_color-800 ">
                            <NavLink to="/">Home</NavLink>
                          </p>
                        </div>
                      </li>
                      {/* </a> */}
                      <li className="text-main_color-800 pt-4">
                        <div className="w-full h-full md:w-full  md:h-full text-main_color-800">
                          <p className="text-main_color-1000  text-md duration-700 p-2 ease-in-out hover:text-main_color-1000  hover:bg-main_color-800 ">
                          <NavLink to="/Coins">Coins</NavLink>
                          </p>
                        </div>
                      </li>
                      {/* <a className="cursor-pointer"> */}
                      <li className="pt-2">
                        <div className="w-full h-full md:w-full  md:h-full text-main_color-800">
                          <p className="text-main_color-1000  text-md duration-700 p-2 ease-in-out hover:text-main_color-1000  hover:bg-main_color-800 ">
                          <NavLink to="/Exchanges">Exchange Coins</NavLink>
                          </p>
                        </div>
                      </li>
                      {/* </a> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
