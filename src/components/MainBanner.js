import React from "react";
import { ReactTyped } from "react-typed";

const MainBanner = () => {
  return (
    <div className="bg-[#212428] text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Section */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <p className="text-md sm:text-lg text-gray-400">Hi, I am</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Kartik Bhosale
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium">
              Full Stack Developer Specializing in{" "}
              <span className="block mt-2 text-[#4CAF50]">
                <ReactTyped
                  strings={["React Js", "Laravel", "React Native", "Next Js"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </span>
            </h2>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src="assets/kartik.png"
              alt="Kartik Bhosale"
              className="max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-2xl p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
