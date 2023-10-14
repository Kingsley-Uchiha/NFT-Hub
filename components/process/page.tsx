import Image from "next/image";

export default function Process() {
  return (
    <section className="py-20 px-24 flex flex-col justify-center items-center gap-5">
      <div className="process flex items-center gap-10 max-w-5xl">
        <Image
          src="/process1.png"
          width={500}
          height={100}
          alt="Planning"
          className="flex-1"
        />
        <div className="txt flex-1">
          <h3 className="font-para font-bold text-4xl pb-8">Planning</h3>
          <p className="pr-16 font-para text-base font-light text-lite">
            Quality comes first. we took our time to plan out everything and
            build our production pipeline for a good quality artworks.
          </p>
        </div>
      </div>
      <div className="process flex items-center gap-10 max-w-5xl">
        <div className="txt flex-1">
          <h3 className="font-para font-bold text-4xl pb-8">Production</h3>
          <p className="pr-16 font-para text-base font-light text-lite">
            Quality comes first. we took our time to plan out everything and
            build our production pipeline for a good quality artworks.
          </p>
        </div>
        <Image
          src="/process2.png"
          width={500}
          height={100}
          alt="Production"
          className="flex-1"
        />
      </div>
      <div className="process flex items-center gap-10 max-w-5xl">
        <Image
          src="/process3.png"
          width={500}
          height={100}
          alt="Launch"
          className="flex-1"
        />
        <div className="txt flex-1">
          <h3 className="font-para font-bold text-4xl pb-8">Launch</h3>
          <p className="pr-16 font-para text-base font-light text-lite">
            Quality comes first. we took our time to plan out everything and
            build our production pipeline for a good quality artworks.
          </p>
        </div>
      </div>
    </section>
  );
}
