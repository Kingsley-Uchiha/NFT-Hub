"use client";

import { useState } from "react";
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
  };

  return (
    <div
      className={`pt-4 absolute top-32 right-0
    carousel flex flex-col items-center justify-between overflow-hidden gap-5`}
    >
      {/* 42.85 */}
      <div
        className={`carousel-inner flex gap-0 items-center trans-${activeCaro}`}
      >
        <div className="carousel-item blank"></div>
        <CarouselItem
          activeCaro={activeCaro}
          index={1}
          image={"/car1.png"}
          name="Hamlet Contemplates"
          username="SalvadorDali"
          likes={100}
          time={{
            days: 0o5,
            hrs: 12,
            mins: 0o7,
            secs: 45,
          }}
        />
        <CarouselItem
          activeCaro={activeCaro}
          index={2}
          image={"/car2.png"}
          name="Triumphant Awakening"
          username="Trista Francis"
          likes={220}
          time={{
            days: 0o1,
            hrs: 16,
            mins: 25,
            secs: 45,
          }}
        />
        <CarouselItem
          activeCaro={activeCaro}
          index={3}
          image={"/car3.png"}
          name="Living Vase 01 by Lanza"
          username="Freddie Carpenter"
          likes={90}
          time={{
            days: 12,
            hrs: 0o2,
            mins: 47,
            secs: 25,
          }}
        />
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
