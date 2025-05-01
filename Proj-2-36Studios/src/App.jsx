import React, { useRef, useState } from "react";
import "./assets/index.css";
import Canvas from "./Canvas";
import data from "./data";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingspan = useRef(null);
  const [isRedTheme, setIsRedTheme] = useState(false);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => locomotiveScroll.destroy();
  }, []);

  useGSAP(() => {
    const handleClick = (e) => {
      setShowCanvas(!showCanvas);
      const newThemeState = !isRedTheme;
      setIsRedTheme(newThemeState);

      // Set initial circle position
      gsap.set(growingspan.current, {
        x: e.clientX,
        y: e.clientY,
        scale: 0,
        opacity: 1,
        transformOrigin: "center",
      });

      // Fast animation parameters
      const duration = 0.8;
      const targetBgColor = newThemeState ? "#fd2c2a" : "#000000";
      const targetTextColor = newThemeState ? "#000000" : "#ffffff";

      // Animate circle
      gsap.to(growingspan.current, {
        scale: 100,
        duration: duration,
        ease: "power3.inOut",
        onStart: () => {
          // Animate background
          gsap.to("body", {
            backgroundColor: targetBgColor,
            duration: duration * 0.7,
            ease: "power2.inOut",
          });

          // Instant text color change
          gsap.set("h1, h2, h3, h4, h5, h6, p, span, a", {
            color: targetTextColor,
          });
        },
        onComplete: () => {
          gsap.set(growingspan.current, { opacity: 0 });
        },
      });
    };

    const heading = headingref.current;
    heading.addEventListener("click", handleClick);
    return () => heading.removeEventListener("click", handleClick);
  }, [showCanvas, isRedTheme]);

  return (
    <div
      className={`w-full min-h-screen ${
        isRedTheme ? "bg-red-600" : "bg-black"
      }`}
    >
      {/* Growing circle effect */}
      <span
        ref={growingspan}
        className="growing-effect fixed rounded-full w-20 h-20 bg-red-600 pointer-events-none z-[1] mix-blend-screen"
        style={{ opacity: 0, transform: "translate(-50%, -50%)" }}
      ></span>

      <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
        {showCanvas &&
          data[0].map((canvasDetails, index) => (
            <Canvas key={index} details={canvasDetails} />
          ))}

        <div
          className={`w-full h-screen ${
            isRedTheme ? "bg-red-600" : "bg-black"
          }`}
        >
          <nav
            className={`w-full ${
              isRedTheme ? "bg-red-600" : "bg-black"
            } shadow-md z-50`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-15">
                <div className="flex-shrink-0">
                  <span
                    className={`text-lg font-bold ${
                      isRedTheme ? "text-black" : "text-white"
                    }`}
                  >
                    ThirtySixStudios
                  </span>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {["Home", "About", "Services", "Contact"].map(
                      (item, index) => (
                        <a
                          key={index}
                          href={`#${item.toLowerCase()}`}
                          className={`px-3 py-2 rounded-md text-sm font-medium ${
                            isRedTheme
                              ? "text-black hover:bg-red-500"
                              : "text-white hover:bg-gray-800"
                          }`}
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

          <div className="text-container px-[20%] w-full">
            <div className="text w-[50%]">
              <h3
                className={`text-4xl leading-[]1.5 ${
                  isRedTheme ? "text-black" : "text-white"
                }`}
              >
                At Thirtysixstudio, we build digital assets and immersive
                experiences for purposeful brands.
              </h3>
              <p
                className={`text-md w-[80%] mt-10 font-normal ${
                  isRedTheme ? "text-black" : "text-white"
                }`}
              >
                We're a boutique production studio focused on design, animation,
                and technology, constantly rethinking what digital craft can do
                for present-day ads and campaigns.
              </p>
              <br />
              <p className={isRedTheme ? "text-black" : "text-white"}>Scroll</p>
            </div>
          </div>

          <div className="w-full absolute bottom-0 left-0">
            <h1
              ref={headingref}
              className={`text-[13rem] font-normal tracking-tight leading-none ${
                isRedTheme ? "text-black" : "text-white"
              } cursor-pointer`}
            >
              Thirtysixstudios
            </h1>
          </div>
        </div>
      </div>

      <div
        className={`w-full relative h-full mt-10 ${
          isRedTheme ? "bg-red-600" : "bg-black"
        }`}
      >
        {data[1].map((canvasDetails, index) => (
          <Canvas key={index} details={canvasDetails} />
        ))}
        <h1 className={`text-8xl ${isRedTheme ? "text-black" : "text-white"}`}>
          About The Brand
        </h1>
        <p
          className={`text-3xl leading-[1.8] w-80% mt-10 font-light ${
            isRedTheme ? "text-black" : "text-white"
          }`}
        >
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
    </div>
  );
}

export default App;
