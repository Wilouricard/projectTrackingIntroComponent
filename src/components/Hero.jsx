import React, { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex flex-col gap-4 pt-10 bg-gray-50 min-h-screen">
      <div className="w-1/2 h-1/2 bg-gray-200 rounded-bl-[100px] absolute z-0 top-0 right-0"></div>
      <div className="relative z-10">
        <div className="w-full flex justify-between relative z-10 px-6">
          <a href="#">
            <img src="\images\logo.svg" alt="" />
          </a>
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="lg:hidden"
          >
            <img src="\images\icon-hamburger.svg" alt="hamburger menu" />
          </button>
        </div>
      </div>
      <div className="relative z-10 top-2/4 flex flex-col gap-6 lg:flex-row-reverse">
        <nav
          className={`flex pt-5 absolute w-full z-30 lg:inline-block lg:bottom-full lg:translate-y-2 lg:left-1/4 ${
            open ? "lg:inline-block" : "hidden"
          }`}
        >
          <div className="bg-white flex flex-col text-center mr-auto ml-auto w-3/4 py-6 uppercase tracking-widest gap-5 font-bold text-xl shadow-lg rounded-lg lg:bg-transparent lg:flex-row lg:justify-around lg:shadow-none lg:w-1/3">
            <a
              href="#"
              className="hover:opacity-90 hover:underline active:opacity-80 active:no-underline"
            >
              <h1 className="hover:text-opacity-50">Product</h1>
            </a>
            <a
              href="#"
              className="hover:opacity-90 hover:underline active:opacity-80 active:no-underline"
            >
              <h1>Features</h1>
            </a>
            <a
              href="#"
              className="hover:opacity-90 hover:underline active:opacity-80 active:no-underline"
            >
              <h1>Pricing</h1>
            </a>
            <hr className="lg:hidden" />
            <a
              href="#"
              className="text-gray-500 hover:text-gray-600 hover:underline active:text-gray-700 active:no-underline"
            >
              Login
            </a>
          </div>
        </nav>
        <div className="h-[400px] py-14 lg:w-1/2 lg:h-[650px]">
          <img
            src="\images\illustration.svg"
            alt=""
            className="h-full w-auto object-cover object-left"
          />
        </div>
        <div className="lg:w-1/2 lg:mt-auto lg:mb-auto md:px-20">
          <div className="flex flex-col gap-4 px-6 lg:gap-8 md:text-center lg:text-start lg:px-0">
            <div className="flex justify-around uppercase tracking-[4px] text-gray-700 text-lg items-center flex-wrap lg:justify-start lg:gap-4">
              <h2 className="font-bold text-white bg-gray-900 rounded-full px-4 py-1">
                new
              </h2>{" "}
              <h2>monograph</h2>
              <h2>dashbord</h2>
            </div>
            <h1 className="uppercase text-5xl font-bold text-gray-900 lg:text-6xl">
              powerful insights into your team
            </h1>
            <p className="text-gray-900 text-xl pr-14 lg:pr-48 lg:pb-8">
              Project planning and time tracking for agile teams
            </p>
          </div>
          <div className="flex text-center items-center px-6 py-8 lg:px-0">
            <button className="w-1/2 text-white bg-red-500 py-3 rounded-md uppercase tracking-[1px] hover:opacity-90 active:opacity-80 shadow-md lg:font-bold">
              schedule a demo
            </button>
            <h2 className="w-1/2 uppercase text-gray-700 tracking-[3px] text-sm">
              to see a preview
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
