"use client"

import { useState } from "react"
import CarouselItem from "./carousel item/page";


export default function Carousel() {
  const [activeCaro, setActiveCaro] = useState(2);
  const changeSlide = (type: string) => {
    switch (type) {
      case "Increment":
        if (activeCaro <= 2) setActiveCaro((prev) => prev + 1);
        break;

      case "Decrement":
        if (activeCaro >= 2) setActiveCaro((prev) => prev - 1);
        break;

      default:
        break;
    }
  }

  return (
    <div
      className={`trans-${activeCaro} pt-4 absolute top-4 right-24
    carousel flex flex-col items-center justify-between overflow-hidden gap-5`}
    >
      {/* 42.85 */}
      <div className="carousel-inner flex gap-3 items-center">
        <div className="carousel-item blank"></div>
        <CarouselItem activeCaro={activeCaro} index={1} image={"/car1.png"} />
        <CarouselItem activeCaro={activeCaro} index={2} image={"/car2.png"} />
        <CarouselItem activeCaro={activeCaro} index={3} image={"/car3.png"} />
        <div className="carousel-item blank"></div>
      </div>
      <div className="controls flex items-center gap-5 font-code pt-5">
        <div
          className="ctrl cursor-pointer bg-gray-900 w-10 h-10 rounded-full flex justify-center items-center"
          onClick={() => changeSlide("Decrement")}
        >
          &lt;
        </div>
        <div
          className="ctrl cursor-pointer bg-gray-900 w-10 h-10 rounded-full flex justify-center items-center"
          onClick={() => changeSlide("Increment")}
        >
          &gt;
        </div>
      </div>
    </div>
  );
}