import React from "react";

function Navbar() {
  return (
    <nav
      className="fixed flex justify-between px-[32px] py-0 font-extrabold
    font-['Inter'] text-[16px] items-center top-6 left-1/2 transform -translate-x-1/2 w-[1024px] h-20 bg-black bg-opacity-50 rounded-bl-[10px] rounded-br-[10px] backdrop-blur-2xl z-50"
    >
      <a href="#">
        Art<span className="text-red-500">DZign</span>
      </a>
      <ul className="flex gap-[50px]">
        <li>
          <a href="#">Course Details</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
