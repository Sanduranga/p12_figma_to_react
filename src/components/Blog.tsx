import React from "react";
import { topicImg1 } from "../assets";

function Blog() {
  return (
    <div className="w-[100vw] h-[551px] py-20 bg-red-400">
      <div className="wrapper">
        <h1 className="w-[1024px] text-[40px] font-black font-['Inter']">
          Latest Posts
          <div className="w-20 h-1 bg-amber-400" />
        </h1>
        <div className="grid grid-cols-3 text-black gap-10 py-10">
          <div className="w-[314px] h-[239px] relative bg-white rounded-[10px] overflow-hidden duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black">
            <div className="absolute top-2 right-2 w-[61px] h-[18px] text-[13px] font-bold font-['Alegreya'] z-20 px-4 bg-white rounded-[10px]">
              DAW
            </div>
            <a href="#">
              <img
                className="w-[314px] h-[159px] rounded-[10px] object-cover"
                src={topicImg1}
                alt="img"
              />
            </a>
            <a href="#">
              <h3 className="text-black py-4 px-6 font-bold font-['Alegreya'] text-lg">
                How To Use Drum Machine in Logic Pro X
              </h3>
            </a>
          </div>

          <div className="w-[314px] h-[239px] relative bg-white rounded-[10px] overflow-hidden duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black">
            <div className="absolute top-2 right-2 w-[61px] h-[18px] text-[13px] font-bold font-['Alegreya'] z-20 px-4 bg-white rounded-[10px]">
              DAW
            </div>
            <a href="#">
              <img
                className="w-[314px] h-[159px] rounded-[10px] object-cover"
                src={topicImg1}
                alt="img"
              />
            </a>
            <a href="#">
              <h3 className="text-black py-4 px-6 font-bold font-['Alegreya'] text-lg">
                How To Use Drum Machine in Logic Pro X
              </h3>
            </a>
          </div>

          <div className="w-[314px] h-[239px] relative bg-white rounded-[10px] overflow-hidden duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black">
            <div className="absolute top-2 right-2 w-[61px] h-[18px] text-[13px] font-bold font-['Alegreya'] z-20 px-4 bg-white rounded-[10px]">
              DAW
            </div>
            <a href="#">
              <img
                className="w-[314px] h-[159px] rounded-[10px] object-cover"
                src={topicImg1}
                alt="img"
              />
            </a>
            <a href="#">
              <h3 className="text-black py-4 px-6 font-bold font-['Alegreya'] text-lg">
                How To Use Drum Machine in Logic Pro X
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
