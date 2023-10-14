import Image from 'next/image';

export default function WhyUs() {
  return (
    <section className="py-20 px-24 flex flex-col gap-20 justify-center items-center">
      <h2 className="text-text font-para font-bold text-6xl">
        Why{" "}
        <span className="bg-grad-t bg-clip-text text-transparent">
          choose us?
        </span>
      </h2>
      <div className="cards flex items-end justify-center gap-5">
        <div className="card border-2 border-[#3754FB] rounded-3xl py-12 px-7 flex flex-col gap-7 max-w-xs hover:-translate-y-8 transition bg-bg-blurr backdrop-blur">
          <Image src="/icon1.png" width={50} height={50} alt="Collection" />
          <h3 className="text-[#3754FB] font-bold text-2xl">
            Huge <br /> collection
          </h3>
          <p className="pr-8 font-para text-base font-light text-text">
            A collection of 890 unique Nerkos built to go beyond the digital
            space.
          </p>
        </div>
        <div className="card border-2 border-[#3754FB] rounded-3xl py-16 px-7 flex flex-col gap-7 max-w-xs hover:-translate-y-8 transition bg-bg-blurr backdrop-blur">
          <Image src="/icon2.png" width={50} height={50} alt="Resource" />
          <h3 className="text-[#3754FB] font-bold text-2xl">
            Top <br /> resource
          </h3>
          <p className="pr-8 font-para text-base font-light text-text">
            Tasty design resources made with care for each pixel. NFTs and game
            resources.
          </p>
        </div>
        <div className="card border-2 border-[#3754FB] rounded-3xl py-12 px-7 flex flex-col gap-7 max-w-xs hover:-translate-y-8 transition bg-bg-blurr backdrop-blur">
          <Image src="/icon3.png" width={50} height={50} alt="Community" />
          <h3 className="text-[#3754FB] font-bold text-2xl">
            Big <br /> community
          </h3>
          <p className="pr-8 font-para text-base font-light text-text">
            Be part of a community of nerko owners and create user generated
            items.
          </p>
        </div>
      </div>
    </section>
  );
}