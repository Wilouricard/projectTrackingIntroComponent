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
            className="md:hidden"
          >
            <img src="\images\icon-hamburger.svg" alt="hamburger menu" />
          </button>
        </div>
      </div>
      <div className="relative z-10 top-2/4 flex flex-col gap-6 md:flex-row-reverse">
        <nav
          className={`flex pt-5 absolute w-full z-30 md:inline-block md:bottom-full md:translate-y-2 md:left-1/4 ${
            open ? "md:inline-block" : "hidden"
          }`}
        >
          <div className="bg-white flex flex-col text-center mr-auto ml-auto w-3/4 py-6 uppercase tracking-widest gap-5 font-bold text-xl shadow-lg rounded-lg md:bg-transparent md:flex-row md:justify-around md:shadow-none md:w-1/3">
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
            <hr className="md:hidden" />
            <a
              href="#"
              className="text-gray-500 hover:text-gray-600 hover:underline active:text-gray-700 active:no-underline"
            >
              Login
            </a>
          </div>
        </nav>
        <div className="h-[400px] py-14 md:w-1/2 md:h-[650px]">
          <img
            src="\images\illustration.svg"
            alt=""
            className="h-full w-auto object-cover object-left"
          />
        </div>
        <div className="md:w-1/2 md:mt-auto md:mb-auto md:px-28">
          <div className="flex flex-col gap-4 px-6 md:gap-8">
            <div className="flex justify-around uppercase tracking-[4px] text-gray-700 text-lg items-center flex-wrap md:justify-start md:gap-6">
              <h2 className="font-bold text-white bg-gray-900 rounded-full px-4 py-1">
                new
              </h2>{" "}
              <h2>monograph</h2>
              <h2>dashbord</h2>
            </div>
            <h1 className="uppercase text-5xl font-bold text-gray-900 md:text-6xl">
              powerful insights into your team
            </h1>
            <p className="text-gray-900 text-xl pr-14 md:pr-48 md:pb-8">
              Project planning and time tracking for agile teams
            </p>
          </div>
          <div className="flex text-center items-center px-6 py-8 md:pr-24">
            <button className="w-1/2 text-white bg-red-500 py-3 rounded-md uppercase tracking-[1px] hover:opacity-90 active:opacity-80 shadow-md md:font-bold">
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
