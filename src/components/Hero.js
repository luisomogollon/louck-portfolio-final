import React from "react";
import { DiReact } from "react-icons/di";
import { SiJavascript, SiHtml5 } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section
        className="bg-gradient-to-l from-indigo-900 via-sky-400 to-indigo-900  "
        id="About"
      >
        <div className="container items-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
              <div className="w-full lg:max-w-md">
                <h2 className="mb-4 text-3xl p-3 font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                  About Me
                </h2>
                <p className="mb-6 font-semibold  tracking-normal text-base text-gray-900 xl:mb-6">
                  I am a fairly reserved person, I like the challenges of each
                  project as a developer, as well as the experience that life
                  imposes on me, it makes me feel good to keep focus and drain
                  my energies creatively and productively.
                  <br /> <br />
                  It's a fact, I really like the react ecosystem and keeping a
                  minimalist design in the web environments I've created
                </p>
                <ul>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      ></path>
                    </svg>
                    <span className="font-semibold text-gray-900 italic">
                      I have solid foundations in javascript, React and CSS
                    </span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      ></path>
                    </svg>
                    <span className="font-medium text-gray-900 italic">
                      I can build minimalist layout, quite clean and intuitive
                    </span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                    <span className="font-medium text-gray-900 italic">
                      I always try to organize, optimize, simplify the code of
                      my apps.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
              <img
                className="mx-auto sm:max-w-sm opacity-95 lg:max-w-full"
                src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                alt="feature"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center  justify-center p-14 bg-gradient-to-l from-indigo-900 via-sky-400 to-indigo-900 ">
        <a
          className="bg-indigo-600 hover:bg-indigo-500  text-white font-bold py-2 px-4 rounded inline-flex items-center  "
          href="./docu.pdf"
          target="_blank"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download Cv</span>
        </a>
      </div>
      <div
        className=" py-16 scroll-smooth  bg-gradient-to-l from-indigo-900 via-sky-300 to-indigo-900"
        id="Skills"
      >
        <div className=" bg-gray-50 md:block hidden absolute transform -translate-x-64 left-0 top-0"></div>
        <div className=" bg-gray-50 md:block hidden absolute transform -translate-x-24 -skew-x-[30deg]  left-0 top-0"></div>
        <div className="max-w-6xl relative mx-auto flex sm:px-0 px-10 flex-col items-start sm:items-center justify-center">
          <svg
            className="w-10 h-10 mb-5"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          <h2 className="text-gray-900 text-4xl font-bold font-serif">
            Skills
          </h2>
          <p className="text-gray-800   text-left font-semibold  text-xl sm:text-center max-w-lg mt-5">
            These are some of my skills, of course I am willing to learn many on
            my way ...!🙌
          </p>
          <button
            href="#_"
            className="text-indigo-600 font-bold text-lg  mt-5 place-content-center flex items-center group"
          >
            <svg
              className="w-5 h-5 group-hover:ml-1 transition-all  ease-out duration-200 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </button>
          <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-4 md: gap-6 mt-8">
            <div className="h-20 w-20 text-indigo-600 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200  flex items-center justify-center">
              <svg className="h-10 w-15 justify-center" viewBox="01 01 15 15">
                <SiJavascript />
              </svg>
            </div>
            <div className="h-20 w-20 text-indigo-600 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200  flex items-center justify-center">
              <svg className="w-12 h-15 justify-center " viewBox="00 01 15 15">
                <DiReact />
              </svg>
            </div>
            <div className="h-20 w-20 text-indigo-600 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
              <svg className="w-10 h-15 justify-center " viewBox="00 01 15 15">
                <SiHtml5 />
              </svg>
            </div>
            <div className="h-20 w-20 text-indigo-600 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200  flex items-center justify-center">
              <svg className="w-10 h-15 justify-center " viewBox="00 01 15 15">
                <FaCss3 />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
