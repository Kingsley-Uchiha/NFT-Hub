import Image from 'next/image';

export default function Wallets() {
  return (
    <section className="py-20 px-24 flex flex-col justify-center items-center gap-10">
      <div className="heading flex flex-col items-center gap-3">
        <h2 className="font-para text-3xl font-bold text-text">Available Wallet</h2>
        <div className="underline w-2/3 h-0.5 bg-[#FC01FF]"></div>
      </div>
      <div className="wallets flex max-w-4xl items-center flex-wrap gap-10 justify-center">
        <Image
          src="/wallets/wallet1.png"
          width={140}
          height={60}
          alt="METAMASK"
        />
        <Image src="/wallets/wallet2.png" width={100} height={60} alt="BitGo" />
        <Image
          src="/wallets/wallet3.png"
          width={120}
          height={60}
          alt="coinbase"
        />
        <Image
          src="/wallets/wallet4.png"
          width={150}
          height={60}
          alt="Trust Wallet"
        />
        <Image
          src="/wallets/wallet5.png"
          width={120}
          height={60}
          alt="EXODUS"
        />
        <Image
          src="/wallets/wallet6.png"
          width={150}
          height={60}
          alt="Coin98"
        />
        <Image
          src="/wallets/wallet7.png"
          width={140}
          height={60}
          alt="BiKeep"
        />
        <Image
          src="/wallets/wallet8.png"
          width={210}
          height={60}
          alt="Coinbase Wallet"
        />
      </div>
    </section>
  );
}