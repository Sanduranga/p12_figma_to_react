import React from "react";
import { commnetor1, commnetor2, commnetor3 } from "../assets";

function Testimonials() {
  return (
    <section className="w-full h-[456px] bg-zinc-900 py-20">
      <div className="wrapper">
        <div className="text-[40px] font-black font-['Inter']">
          What our students say?
        </div>
        <div className="w-20 h-1 bg-red-500" />
        <div className="py-[50px] flex justify-between">
          <div>
            <img
              className="w-[100px] h-[100px] object-cover rounded-sm rounded-tr-[50px]"
              src={commnetor1}
              alt="Img"
            />
            <h1 className="pb-1 pt-3 text-xl font-bold font-['Alegreya']">
              Peter Adams
            </h1>
            <h2 className="w-[264px] text-base font-normal font-['Alegreya']">
              This is a great course. I got to learn a lot.
            </h2>
          </div>

          <div>
            <img
              className="w-[100px] h-[100px] object-cover rounded-lg"
              src={commnetor3}
              alt="Img"
            />
            <h1 className="pb-1 pt-3 text-xl font-bold font-['Alegreya']">
              Emily Smith
            </h1>
            <h2 className="w-[264px] text-base font-normal font-['Alegreya']">
              Awesome! Great job!!
            </h2>
          </div>

          <div>
            <img
              className="w-[100px] h-[100px] object-cover rounded-sm rounded-tl-[50px]"
              src={commnetor2}
              alt="Img"
            />
            <h1 className="pb-1 pt-3 text-xl font-bold font-['Alegreya']">
              Robert Fox
            </h1>
            <h2 className="w-[264px] text-base font-normal font-['Alegreya']">
              I got to learn a lot about Music Production with this course.
              Thanks :)
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
