import Image from 'next/image';

export default function Create() {
  return (
    <section className="py-20 px-24 flex justify-between items-start gap-10 m-auto max-w-7xl">
      <div className="txt flex flex-col gap-5 items-start">
        <h2 className="text-text font-bold font-para text-6xl">
          Create your own digital artwork
        </h2>
        <p className="font-para text-lg font-light text-lite max-w-xl">
          Quality comes first. we took our time to plan out everything and build
          our production pipeline for a good quality artwork's & digital
          artwork.
          <br />
          <br />
          Starting the production on the procedurally generated planets and the
          smart contract for minting.
        </p>
        <a
          href="#"
          className="pt-5 pb-1 font-para font-bold flex items-end gap-2 bg-grad bg-clip-text text-transparent relative group"
        >
          Learn more
          <Image
            src="/arr.png"
            width={13}
            height={13}
            alt=""
            className="mb-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
          />
          <div className="absolute bg-grad w-4/5 h-0.5 top-full"></div>
        </a>
      </div>
      <Image
        src="/create.png"
        width={500}
        height={700}
        alt="Create Inspiration"
      />
    </section>
  );
}