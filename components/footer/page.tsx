import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-20 px-24 grid grid-cols-4 gap-5">
      <div className="info ">
        <div className="logo">
          <Image src="/logo.png" width={140} height={70} alt="NFT Hub" />
        </div>
        <p className="pt-5 font-para text-sm font-light text-text max-w-xs">
          Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non,
          fugit totam vel laboriosam vitae.
        </p>
      </div>
      <div className="account">
        <h3 className="text-lg">Account</h3>
        <ul className="pt-5 font-para text-sm font-light text-text">
          <li className="mb-3">
            <a href="#">Authors</a>
          </li>
          <li className="mb-3">
            <a href="#">Collection</a>
          </li>
          <li className="mb-3">
            <a href="#">Author Profile</a>
          </li>
          <li className="mb-3">
            <a href="#">Create Collection</a>
          </li>
        </ul>
      </div>
      <div className="resurce">
        <h3 className="text-lg">Resources</h3>
        <ul className="pt-5 font-para text-base font-light text-text">
          <li className="mb-3">
            <a href="#">Help & Support</a>
          </li>
          <li className="mb-3">
            <a href="#">Live Auctions</a>
          </li>
          <li className="mb-3">
            <a href="#">Item Details</a>
          </li>
          <li className="mb-3">
            <a href="#">Activity</a>
          </li>
        </ul>
      </div>
      <div className="subscribe ">
        <h3 className="text-lg">Subscribe Us</h3>
        <form action="#" className="form pt-5 flex">
          <input
            type="text"
            placeholder="info@yourgmail.com"
            className="py-4 px-6 bg-transparent border border-[#343444] outline-none rounded-l-xl"
          />
          <button className="py-4 px-6 bg-[#FC01FF] rounded-r-xl">
            <Image src="/plane.png" width={23} height={23} alt="Send" />
          </button>
        </form>
        <div className="links pt-10">
          <ul className="flex gap-2 justify-between">
            <li>
              <a href="#">
                <Image src="/link1.png" width={45} height={45} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src="/link2.png" width={45} height={45} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src="/link3.png" width={45} height={45} alt="Telegram" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src="/link4.png" width={45} height={45} alt="YouTube" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src="/link5.png" width={45} height={45} alt="TikTok" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src="/link6.png" width={45} height={45} alt="Discord" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}