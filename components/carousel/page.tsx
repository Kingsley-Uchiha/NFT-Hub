import { useState } from "react"


export default function Carousel() {
  const [activeCaro, setActiveCaro] = useState(1);
  const changeSlide = (type: string) => {
    switch (type) {
      case "Increment":
        if (activeCaro <= 3) setActiveCaro((prev) => prev + 1);
        break;

      case "Decrement":
        if (activeCaro >= 1) setActiveCaro((prev) => prev - 1);
        break;

      default:
        break;
    }
  }

  return (
    <div className={`trans-${activeCaro} 
    carousel flex flex-col items-center justify-between overflow-hidden max-w-`}>
      {/* 42.85 */}
      <div className="carousel-inner flex gap-10 items-center">
        <div className="carousel-item blank"></div>
        <div className={`carousel-item ${activeCaro === 1 ? "active" : ""}`}></div>
        <div className={`carousel-item ${activeCaro === 2 ? "active" : ""}`}></div>
        <div className={`carousel-item ${activeCaro === 3 ? "active" : ""}`}></div>
        <div className="carousel-item blank"></div>
      </div>
      <div className="controls flex items-center">
        <div className="ctrl" onClick={() => changeSlide("Decrement")}>&lt;</div>
        <div className="ctrl" onClick={() => changeSlide("Increment")}>&gt;</div>
      </div>
    </div>
  )
}