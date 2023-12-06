import React from "react";
import { fileIcon, redL, studentIcon } from "../assets";

function Info() {
  return (
    <section className="w-[100vw] h-[380px] py-20 bg-zinc-900">
      <div className="wrapper relative">
        <div className="flex items-center">
          <div className="flex flex-col w-full items-center">
            <img src={studentIcon} alt="studentCount" />
            <h1 className="text-[40px] font-black font-['Inter'">730+</h1>
            <h2 className="text-3xl font-bold font-['Alegreya']">Students</h2>
          </div>
          <div className="flex flex-col w-full items-center">
            <img src={fileIcon} alt="fileIcon" />
            <h1 className="text-[40px] font-black font-['Inter'">26 Hrs</h1>
            <h2 className="text-3xl font-bold font-['Alegreya']">
              Video Content
            </h2>
          </div>
        </div>

        <img
          className="w-[88px] h-[60px] absolute top-0 left-0"
          src={redL}
          alt="L"
        />
      </div>
    </section>
  );
}

export default Info;
