import Link from "next/link";
import marketLane from "@/images/marketLane.png";
import Image from "next/image";


const Logo = () => {
  return (
    <Link href={"/"}>
      {/* <h3 className="text-1xl font-semibold hover:text-slate-400 cursor-pointer duration-200">MarketLane Ventures</h3> */}
      <Image src={marketLane} alt="logo" width={135} height={135} />
    </Link>
  )
};

export default Logo;
