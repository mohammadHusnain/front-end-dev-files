import React, { useState } from "react";
import "./assets/index.css";
import Canvas from "./Canvas";
import data from "./data";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";


function App() {

  useState()

useEffect(()=>{
  const locomotiveScroll = new LocomotiveScroll();

})

  //data is an array and item is an array inside data array



return (
  <>
    <div className="w-full relative min-h-screen  font-['Helvetica_Now_Display']">
      {data[0].map((canvasDetails, index) => (
        <Canvas key={index} details={canvasDetails} />
      ))}

      <div className="w-full h-screen text-white bg-black ">
        <nav className=" w-full bg-black shadow-md z-50">
        
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-15">
              <div className="flex-shrink-0">
                <span className="text-lg font-bold">ThirtySixStudios</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {["Home", "About", "Services", "Contact"].map(
                    (item, index) => (
                      <a
                        key={index}
                        href={`#${item.toLowerCase()}`}
                        className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="text-container px-[20%] w-full ">
          <div className="text w-[50%] ">
            <h3 className="text-4xl text-white leading-[]1.5">
              At Thirtysixstudio, we build digital assets and immersive
              experiences for purposeful brands.
            </h3>
            <p className="text-md w-[80%] mt-10 font-normal">
              We're a boutique production studio focused on design, animation,
              and technology, constantly rethinking what digital craft can do
              for present-day ads and campaigns.
            </p>
            <br />
            <p>Scroll</p>
          </div>
        </div>

        <div className="w-full absolute bottom-0 left-0">
          <h1 className="text-[13rem] font-normal tracking-tight leading-none">
            Thirtysixstudios
          </h1>
        </div>
      </div>
    </div>

    <div className="w-full relative h-full text-white mt-10 font-['Helvetica_Now_Display']">
      {data[1].map((canvasDetails, index) => (
        <Canvas key={index} details={canvasDetails} />
      ))}
      <h1 className="text-8xl">About The Brand</h1>
      <p className="text-3xl leading-[1.8] w-80% mt-10 font-light">
        We are a team of designers, developers, and strategists who are
        passionate about creating digital experiences that are both beautiful
        and functional.
      </p>

      <img
        className="w-[80%] mt-10"
        src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
        alt=""
      />
    </div>
  </>
);
}

export default App;
