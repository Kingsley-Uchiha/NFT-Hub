// import PropTypes from "prop-types";
import Image from 'next/image';

export default function CarouselItem({ activeCaro, index, image, name, username, likes }: any) {
  return (
    <div
      className={`carousel-item font-para bg-gray-900 p-5 rounded-xl flex flex-col gap-5
      ${activeCaro === index && "active"} slide`}
    >
      <div className="image relative flex items-center justify-center">
        <Image
          className="rounded-2xl"
          src={image}
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
          <span className="text-sm">220{likes}</span>
        </div>
        <div className="timer absolute bottom-2 py-1 px-3 bg-gray-950 rounded-xl flex gap-2 items-center">
          <Image
            className="rounded-2xl"
            src="/fire.png"
            alt=""
            width={20}
            height={20}
          />
          <span>dd : hh : mm : ss</span>
        </div>
        <div className="bid"></div>
      </div>
      <div className="name flex justify-between items-center">
        <h4>"T{name}...</h4>
        <p className="bg-blue-900 rounded-xl py-1 px-3 text-xs">BSC</p>
      </div>
      <div className="user flex items-center gap-3">
        <div className="profile"></div>
        <div className="info flex items-center justify-between w-full">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-light text-gray-500">Creator</p>
            <p className="text-sm">T{username}</p>
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