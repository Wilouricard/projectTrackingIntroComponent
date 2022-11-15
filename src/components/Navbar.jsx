import React from "react";

export default function Navbar() {
  return (
    <nav className="flex pt-5 absolute w-full z-30 hidden md:inline-block">
      <div className="bg-white flex flex-col text-center mr-auto ml-auto w-3/4 py-6 uppercase tracking-widest gap-5 font-bold text-xl shadow-lg rounded-lg md:bg-transparent md:flex-row md:justify-around md:shadow-none md:w-1/2">
        <a href="#" className="hover:opacity-90 hover:underline active:opacity-80 active:no-underline">
          <h1 className="hover:text-opacity-50">Product</h1>
        </a>
        <a href="#" className="hover:opacity-90 hover:underline active:opacity-80 active:no-underline">
          <h1>Features</h1>
        </a>
        <a href="#" className="hover:opacity-90 hover:underline active:opacity-80 active:no-underline">
          <h1>Pricing</h1>
        </a>
        <hr />
        <a href="#" className="text-gray-500 hover:text-gray-600 hover:underline active:text-gray-700 active:no-underline">Login</a>
      </div>
    </nav>
  );
}
