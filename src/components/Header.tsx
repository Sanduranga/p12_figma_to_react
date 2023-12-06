import React from "react";
import { header_image } from "../assets";
import { Navbar } from ".";

function Header() {
  return (
    <header
      className="bg-cover bg-center h-[100vh] relative"
      style={{ backgroundImage: `url(${header_image})` }}
    >
      <div className="wrapper">
        <Navbar />
        <div className="absolute left-[699px] bottom-0 flex flex-col justify-between p-10 w-[453px] h-[326px] bg-black bg-opacity-50 rounded-tl-[20px] rounded-tr-[20px] border-l-4 border-r-4 border-t-4 border-white backdrop-blur-[50px]">
          <p className="text-white text-base font-extrabold font-['Inter']">
            Sound Design Masterclass
          </p>
          <div className="w-[373px] text-white text-[40px] font-bold font-['Alegreya']">
            Learn the Art of Sound Design
          </div>
          <div className="w-[170px] h-[39px] px-8 py-2.5 bg-red-500 rounded-[10px] justify-start items-start gap-2.5 inline-flex">
            <a
              href="#"
              className="text-white text-base font-bold font-['Inter']"
            >
              Demo Lesson
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
