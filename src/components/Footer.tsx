import React from "react";
import { fb, insta, twitter } from "../assets";

function Footer() {
  return (
    <footer className="w-full h-[232px] bg-black py-[50px]">
      <div className="wrapper">
        <div className=" flex justify-between ">
          <div className="w-32 h-[72px] relative">
            <div className="w-[99px] h-1 left-0 top-0 absolute">
              <span className="text-white text-base font-extrabold font-['Inter']">
                Sound
              </span>
              <span className="text-red-500 text-base font-extrabold font-['Inter']">
                DZign
              </span>
            </div>
            <div className="w-32 h-8 left-0 top-[40px] flex justify-between absolute">
              <img src={fb} alt="fb" />
              <img src={twitter} alt="tweeter" />
              <img src={insta} alt="insta" />
            </div>
          </div>
          <div>
            <h1 className="text-red-400 text-lg font-bold pb-1 font-['Alegreya']">
              Quick Links
            </h1>
            <h1 className="text-white text-base font-normal ml-4 py-1 font-['Alegreya']">
              Blog
            </h1>
            <h1 className="text-white text-base font-normal ml-4 font-['Alegreya']">
              Privacy Policy
            </h1>
          </div>
          <div>
            <h1 className="text-red-400 text-lg font-bold pb-1 font-['Alegreya']">
              Contact Us
            </h1>
            <h1 className="text-white text-base font-normal ml-4 py-1 font-['Alegreya']">
              contact@email.com
            </h1>
            <h1 className="text-white text-base font-normal ml-4 font-['Alegreya']">
              +1 999 9999 999
            </h1>
          </div>
        </div>
        <div className="text-white text-base font-normal font-['Alegreya']">
          This website is designed by SragteQ Ⓒ 2023
        </div>
      </div>
    </footer>
  );
}

export default Footer;
