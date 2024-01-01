// import PropTypes from "prop-types";
import Image from 'next/image';
import { useState } from 'react';

type CarouselItemProps = {
  activeCaro: number
  index: 1 | 2 | 3
  image: string
  name: string
  username: string
  likes: number
  time: {
    days: number
    hrs: number
    mins: number
    secs: number
  }
}

export default function CarouselItem(props: CarouselItemProps) {
  const [timer, setTimer] = useState(props.time);

  const countDown = () => {
    const secM = 60;
    const minM = 60;
    const hrsM = 24;

    if (timer.secs >= 1)
      setTimer(val => ({ ...val, secs: timer.secs - 1 }));
    else {
      setTimer((val) => ({ ...val, secs: secM }));
    }
  }

  return (
    <div
      className={`carousel-item font-para bg-gray-900 p-5 rounded-3xl flex flex-col gap-5
      ${props.activeCaro === props.index && "active"} slide `}
    >
      <div className="image relative flex items-center justify-center">
        <Image
          className="rounded-2xl"
          src={props.image}
          alt=""
          width={300}
          height={300}
        />
        <div className="likes absolute top-3 right-3 bg-gray-950 py-1 px-3 rounded-xl flex gap-2 items-center">
          <Image
            className="rounded-2xl"
            src="/heart.png"
            alt=""
            width={18}
            height={18}
          />
          <span className="text-sm">{props.likes}</span>
        </div>
        <div className="timer absolute bottom-2 py-1 px-3 bg-gray-950 rounded-xl flex gap-2 items-center">
          <Image
            className="rounded-2xl"
            src="/fire.png"
            alt=""
            width={20}
            height={20}
          />
          <span>
            {String(timer.days).length < 2 ? "0" + timer.days : timer.days} :
            {String(timer.hrs).length < 2 ? "0" + timer.hrs : timer.hrs} :
            {String(timer.mins).length < 2 ? "0" + timer.mins : timer.mins} :
            {String(timer.secs).length < 2 ? "0" + timer.secs : timer.secs}
          </span>
        </div>
        <div className="bid"></div>
      </div>
      <div className="name flex justify-between items-center">
        <h4 className="text-xl">"{props.name}...</h4>
        <p className="bg-blue-900 rounded-xl py-1 px-3 text-xs">BSC</p>
      </div>
      <div className="user flex items-center gap-3">
        <div className="profile"></div>
        <div className="info flex items-center justify-between w-full">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-light text-gray-500">Creator</p>
            <p className="text-sm">{props.username}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-light text-gray-500">Current Bid</p>
            <p className="">4.89 ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// CarouselItem.defaultProps = {
//   activeCaro: 1
// };

// CarouselItem.protoTypes = {
//   activeCaro: PropTypes.number,
//   index: PropTypes.number,
//   image: PropTypes.string,
//   name: PropTypes.string
// };