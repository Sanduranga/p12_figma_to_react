import React, { useState } from "react";
import { Ellipse1, topicImg1, topicImg2, yellowL } from "../assets";

function Topics() {
  const [topicImg, setTopicImg] = useState(topicImg1);
  return (
    <section className="w-[100vw] py-[80px] h-[567px] bg-black">
      <div className="wrapper relative">
        <div className="self-stretch text-[40px] font-black font-['Inter']">
          <h1>What will you learn?</h1>
          <div className="w-20 h-1 bg-red-500" />
        </div>
        <div className="flex mt-10 justify-between">
          <ul className="text-xl flex ml-6 flex-col gap-6 font-normal font-['Alegreya']">
            <li
              className="w-fit flex gap-[16px]"
              onMouseEnter={() => setTopicImg(topicImg1)}
            >
              <img src={Ellipse1} alt="dot" />
              What are the pencil grades
            </li>
            <li
              className="w-fit flex gap-[16px]"
              onMouseEnter={() => setTopicImg(topicImg2)}
            >
              <img src={Ellipse1} alt="dot" />
              Texture in Pencil Art
            </li>
            <li
              className="w-fit flex gap-[16px]"
              onMouseEnter={() => setTopicImg(topicImg2)}
            >
              <img src={Ellipse1} alt="dot" />
              Achieving Realism
            </li>
            <li
              className="w-fit flex gap-[16px]"
              onMouseEnter={() => setTopicImg(topicImg2)}
            >
              <img src={Ellipse1} alt="dot" />
              Perspective and Depth
            </li>
            <li
              className="w-fit flex gap-[16px]"
              onMouseEnter={() => setTopicImg(topicImg2)}
            >
              <img src={Ellipse1} alt="dot" />
              Blending and Erasing
            </li>
          </ul>
          <img
            className="w-[558px] h-[287px] object-cover rounded-bl-[150px] rounded-tr-[150px]"
            src={topicImg}
          />
        </div>
        <img
          className="w-[88px] h-[60px] absolute right-[-24px] bottom-[-24px]"
          src={yellowL}
          alt="L"
        />
      </div>
    </section>
  );
}

export default Topics;
