import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ReactTyped } from "react-typed";

const MainBanner = () => {
  const useBox = useRef();
  const headingRef = useRef();
  const subHeadingRef = useRef();
  const introTextRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      useBox.current,
      { scale: 0.5, opacity: 0 },
      {
     
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 2,
       ease: "bounce.inout",
        delay: 0.5,
    
 
      }
    );

// Animate the text sections
gsap.fromTo(
  [introTextRef.current, headingRef.current, subHeadingRef.current],
  { y: 20, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.2,
    delay: 0.5,
  }
);

  });


  
  return (
    <div className="bg-[#212428] text-white min-h-screen flex items-center overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <p
              className="text-md sm:text-lg text-gray-400"
              ref={introTextRef}
            >
              Hi, I am
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white"
              ref={headingRef}
            >
              Kartik Bhosale
            </h1>
            <h2
              className="text-2xl sm:text-3xl font-medium"
              ref={subHeadingRef}
            >
              Full Stack Developer Specializing in{" "}
              <span className="block mt-2 text-[#4CAF50]">
                <ReactTyped
                  strings={["React Js","HTML","CSS","Boostrap","Tailwind",  "React Native", "Next Js","JavaScript","Java","SpringBoot","Laravel",]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </span>
            </h2>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end ">
            <img
              src="assets/kartik_bg.png"
              alt="Kartik Bhosale"
              className="max-w-xs sm:max-w-sm md:max-w-md h-auto  p-2"
              ref={useBox}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
