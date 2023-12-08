import Image from 'next/image';
import Carousel from '../carousel/page';

export default function Hero() {
  return (
    <header className="py-10 px-24 pt-4 relative w-full ">
      <div className="txt">
        <div className="span inline-block text-xl">
          <span className="font-code font-extrabold text-blue">-------</span>{" "}
          &nbsp;
          <span className="font-head font-extrabold bg-grad-r bg-clip-text text-transparent">
            NFTHub
          </span>
        </div>
        <h1 className="my-4 font-head text-6xl font-bold max-w-2xl leading-snug">
          Buy & Sell Quality NFT Collection
        </h1>
        <p className="font-para text-lite text-xl max-w-md">
          A 890 piece custom Nfthub's collection is joining the NFT space on
          Opensea.
        </p>
        <a
          href="#"
          className="btn text-[#000] py-5 px-6 my-12 bg-grad font-bold flex items-center gap-5 max-w-fit group"
        >
          Connect Wallet
          <Image
            src="/arrow-right.png"
            width={45}
            height={10}
            alt=""
            className="mr-6 transition-all group-hover:mr-3 group-hover:ml-3"
          />
        </a>
        <div className="numbers flex items-start gap-3">
          <div className="flex flex-col items-center">
            <p className="font-para text-3xl font-bold">6.7k</p>
            <h3 className="font-para text-lite text-base">Art Work</h3>
          </div>
          <Image
            src="/star.png"
            width={20}
            height={20}
            alt=""
            className="mt-2"
          />
          <div className="flex flex-col items-center">
            <p className="font-para text-3xl font-bold">37k</p>
            <h3 className="font-para text-lite text-base">Artist</h3>
          </div>
          <Image
            src="/star.png"
            width={20}
            height={20}
            alt=""
            className="mt-2"
          />
          <div className="flex flex-col items-center">
            <p className="font-para text-3xl font-bold">90k+</p>
            <h3 className="font-para text-lite text-base">Auction</h3>
          </div>
        </div>
        <div className="users pt-20 flex items-center gap-4">
          <div className="imgs flex relative">
            <Image
              src="/user1.png"
              width={40}
              height={40}
              alt=""
              className="mr-10"
            />
            <Image
              src="/user2.png"
              width={40}
              height={40}
              alt=""
              className="absolute ml-5"
            />
            <Image
              src="/user3.png"
              width={40}
              height={40}
              alt=""
              className="absolute ml-10"
            />
          </div>
          <div className="">
            <p className="font-para text-3xl font-bold">47k+</p>
            <h3 className="font-para text-lite text-xs">Community mambers</h3>
          </div>
        </div>
        <div className="img"></div>
      </div>
      <Carousel />
    </header>
  );
}