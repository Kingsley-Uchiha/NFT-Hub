import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
  return ( // 40 - 100
    <nav className="py-10 px-24 flex justify-between items-center">
      <div className="logo">
        <Image src="/logo.png" width={160} height={160} alt="NFT HUB's logo" />
      </div>
      <div className="links flex gap-20 items-center font-para font-bold text-[#C0C0C0]">
        <ul className="flex gap-8 items-center">
          <li className="text-[#FFF]">
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Collection</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
        </ul>
        <ul className="flex gap-8 items-center">
          <li>
            <Link href="#">
              <Image src="/twitter.png" width={30} height={30} alt="Twitter" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="/discord.png" width={30} height={30} alt="Discord" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                src="/instagram.png"
                width={30}
                height={30}
                alt="Instagram"
              />
            </Link>
          </li>
        </ul>
        <Link href="#" className="btn text-[#000] py-5 px-6 bg-grad">Connect Wallet</Link>
      </div>
    </nav>
  );
}
