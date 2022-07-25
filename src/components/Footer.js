import React from "react";
import {
  AiOutlineLinkedin,
  AiFillMail,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <section className="box-border py-8 scroll-smooth leading-7  text-gray-900 bg-gradient-to-l from-indigo-900 via-sky-400 to-indigo-900 border-solid sm:py-12 md:py-16 lg:py-24">
        <div className="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
          <section className=" scroll-smooth" id="Proyect"></section>
          <div className="flex flex-col items-center leading-7 text-center text-gray-900">
            <h2 className="box-border m-0 text-4xl p-4 font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
              Project
            </h2>

            <p className="box-border mt-4 text-2xl font-semibold leading-normal text-gray-800 border-solid">
              Some of my projects on GitHub
            </p>
          </div>

          <div className="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4  border-blue-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
            <div className="box-border px-4 py-8 mb-6 text-center bg-indigo-250 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                Chat App
              </h3>
              <p className="mt-3 leading-7 text-gray-900  ml-1 border-0 border-solid">
                A simple Chat in real-time <br />
                <br />
                <br />
              </p>
              <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                  <br />
                </p>
                <p className="box-border my-0 ml-1 mr-0 text-x italic text-center font-semibold border-0 border-gray-200">
                  Javascript+React+React Router+Axio{" "}
                  <span className="block"></span>
                </p>
              </div>

              <a
                className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded-md cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg"
                href="https://github.com/luisomogollon/Chat-lou.git"
              >
                Code
              </a>
            </div>
            <div className="box-border px-4 py-8 mb-6 text-center bg-indigo-250 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                Blog List App
              </h3>
              <p className="mt-3 leading-7 ml-1 text-gray-900 border-0 border-solid">
                Redux version of React Blog List App.
                <br /> <br /> <br />
              </p>
              <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                  <br />
                </p>
                <p className="box-border my-0 ml-1 mr-0 text-center border-0 border-gray-200 font-semibold italic">
                  {" "}
                  Javascript+HTML+CSS+React+Redux
                  <span className="block"></span>
                </p>
              </div>
              <a
                className="inline-flex items-center  justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border-b-4 border-blue-700 rounded cursor-pointer hover:text-white sm:text-base sm:mt-8 md:text-lg"
                href="https://github.com/luisomogollon/BlogList-App-Redux.git"
              >
                Code
              </a>
            </div>
            <div className="box-border px-4 py-8 text-center bg-indigo-250 border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                Countries-hook
              </h3>
              <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                React practice datafetching from country data API. <br /> <br />
              </p>
              <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                <p className="box-border m-0 text-6xl leading-normal text-center border-0 border-gray-200">
                  <br />
                </p>
                <p className="box-border font-semibold italic  my-0 ml-1 mr-0 text- text-center border-0 border-gray-200">
                  Javascrip+React <span className="block"></span>
                </p>
              </div>
              <a
                className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded-md cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg"
                href="https://github.com/luisomogollon/countries-hook.git"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <p className="text- text-center text-4xl font-semibold text-gray-900 v ">
          Let's talk
        </p>

        <div className="max-w-screen-xl px-4 py-12  mx-auto space-y-8 justify-center overflow-hidden sm:px-6 lg:px-8">
          <div className="flex place-content-center space-x-0 ">
            <a
              href="https://www.facebook.com/luis.michinaux/"
              className="text-indigo-600  hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 15 15"
              >
                <AiFillFacebook />
              </svg>
            </a>
            <a
              href="https://t.me/Luiso190"
              className="text-indigo-600 space-x-1 hover:text-gray-500"
            >
              <span className="sr-only ">Telegram</span>
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 17 15"
              >
                <FaTelegramPlane />
              </svg>
            </a>
            <a
              href="mailto:Michinaux77@gmail.com"
              className="text-indigo-600 space-x-1 hover:text-gray-500"
            >
              <span className="sr-only">Gmail</span>
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 15 15"
              >
                <AiFillMail />
              </svg>
            </a>
            <a
              href="https://github.com/luisomogollon"
              className="text-indigo-600 space-x-1 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 15 15"
              >
                {" "}
                <AiFillGithub />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/luis-michinaux/"
              className="text-indigo-600 space-x-1 hover:text-gray-500"
            >
              <span className="sr-only">Linkedin</span>
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                fill="currentColor"
                viewBox="1 0 15 15"
              >
                <AiOutlineLinkedin />
                
              </svg>
            </a>
           

            <span />
            <section className=" scroll-smooth" id="contact2"></section>
            <path></path>
          </div>
          <p className="mt-8 text-base leading-10 italic font-semibold  text-center text-gray-800">
            LuisMichinaux77@gmail.com
            <section className=" scroll-smooth" id="contact">
              {" "}
            </section>
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
