"use client";
import Slider from "react-slick";
import banner1 from "@/images/banner1.png";
import banner2 from "@/images/banner2.png";
import banner3 from "@/images/banner3.png";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import BannerText from "@/components/BannerText";

const Banner = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-50 hover:text-white hover:bg-black cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div className="p-3 bg-slate-50 hover:text-white hover:bg-black cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2" onClick={onClick}>
        <PiCaretRightLight />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        {/* Banner one */}
        <div className="w-full h-full relative">
          <Image
            src={banner1}
            alt="bannerone"
            className="w-full h-full relative"
          />
          <BannerText title="¡Productos de calidad!" />
        </div>

        {/* Banner two */}
        <div className="w-full h-full relative">
          <Image
            src={banner2}
            alt="bannertwo"
            className="w-full h-full relative"
          />
          <BannerText title="¡Las mejores ofertas!" />
        </div>

        {/* Banner three */}
        <div className="w-full h-full relative">
          <Image
            src={banner3}
            alt="bannerthree"
            className="w-full h-full relative"
          />
          <BannerText title="¡Seguro y rápido!" />
        </div>
      </Slider>
      <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10"></div>
    </div>
  );
};

export default Banner;
