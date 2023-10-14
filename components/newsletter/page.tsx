import Image from 'next/image';

export default function Newsletter() {
  return (
    <section className="mt-20 mx-24 p-14 rounded-3xl flex flex-col gap-5 items-center justify-center border-2 border-[#3754FB] bg-bg-blurr backdrop-blur relative">
      <h2 className="text-text font-para font-bold text-6xl">
        Never{" "}
        <span className="bg-grad-t bg-clip-text text-transparent">
          miss a drop!
        </span>
      </h2>
      <p className="pr-8 font-para text-base font-light text-text">
        Subscribe to our super-rare and exclusive drops & collectibles.
      </p>
      <form className="form my-5 flex w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-transparent border border-[#343444] py-5 px-6 outline-none flex-1 rounded-l-xl"
        />
        <button className="py-5 px-6 bg-grad font-bold text-[#000] rounded-r-xl">
          Subscribe
        </button>
      </form>
      <Image
        src="/x.png"
        width={400}
        height={500}
        alt=""
        className="absolute -right-24 bottom-20"
      />
      <Image
        src="/lt1.png"
        width={17}
        height={17}
        alt=""
        className="absolute top-14 left-32"
      />
      <Image
        src="/lt2.png"
        width={40}
        height={40}
        alt=""
        className="absolute bottom-20 left-60"
      />
      <Image
        src="/lt3.png"
        width={25}
        height={25}
        alt=""
        className="absolute top-14 right-60"
      />
      <Image
        src="/lt4.png"
        width={50}
        height={50}
        alt=""
        className="absolute bottom-14 right-32"
      />
    </section>
  );
}