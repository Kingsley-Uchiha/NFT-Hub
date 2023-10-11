import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="">
      <div className="logo">
        <Image src="/logo.png" width={60} height={60} alt="NFT HUB's logo" />
      </div>
      <div className="links">
        <ul className="">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Collection</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul className="">
          <li>
            <a href="#">
              <Image src="/twitter.png" width={60} height={60} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <Image src="/discord.png" width={60} height={60} alt="Discord" />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                src="/instagram.png"
                width={60}
                height={60}
                alt="Instagram"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
