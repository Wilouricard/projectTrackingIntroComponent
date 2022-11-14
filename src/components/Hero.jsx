import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <main className="flex flex-col gap-4 pt-10 bg-gray-50 min-h-screen">
      <div className="w-1/2 h-1/2 bg-gray-200 rounded-bl-[100px] absolute z-0 top-0 right-0"></div>
      <div className="relative z-10">
        <div className="w-full flex justify-between relative z-10 px-6">
          <a href="#">
            <img src="\images\logo.svg" alt="" />
          </a>
          <button>
            <img src="\images\icon-hamburger.svg" alt="" />
          </button>
        </div>
            <Navbar />
        <div className="h-[400px] py-14">
          <img
            src="\images\illustration.svg"
            alt=""
            className="h-full w-auto object-cover object-left"
          />
        </div>
      </div>
      <div className="relative z-10 top-2/4 flex flex-col gap-6 px-6 py-12">
        <div className="flex flex-col gap-4">
          <div className="flex justify-around uppercase tracking-[4px] text-gray-700 text-lg items-center flex-wrap">
            <h2 className="font-bold text-white bg-gray-900 rounded-full px-4 py-1">
              new
            </h2>{" "}
            <h2>monograph</h2>
            <h2>dashbord</h2>
          </div>
          <h1 className="uppercase text-5xl font-bold text-gray-900">
            powerful insights into your team
          </h1>
          <p className="text-gray-900 text-xl pr-14">
            Project planning and time tracking for agile teams
          </p>
        </div>
        <div className="flex text-center items-center">
          <button className="w-1/2 text-white bg-red-500 py-3 rounded-md uppercase tracking-[1px] hover:opacity-90 active:opacity-80 shadow-md">
            schedule a demo
          </button>
          <h2 className="w-1/2 uppercase text-gray-700 tracking-[3px] text-sm">
            to see a preview
          </h2>
        </div>
      </div>
    </main>
  );
}
