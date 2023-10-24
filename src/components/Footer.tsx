import { BsYoutube, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import payment from "@/images/payment.png";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import marketlaneWhite from "@/images/marketLane-white.png";

const Footer = () => {
  return (
    <div className="w-full bg-darkText text-slate-100">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <Link href={"/"}>
            <Image src={marketlaneWhite} alt="Logo" width={150} height={150} />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            cumque similique, explicabo, repellat ullam culpa, minus a quidem
            facere ut perferendis excepturi officiis quae dolor laborum autem!
          </p>
          <div className="flex items-center gap-x-4">
            <span className="bg-slate-100 text-darkText p-1 inline-flex items-center justify-center rounded-md text-lg hover:text-blue-600 duration-200 cursor-pointer">
              <BsFacebook />
            </span>
            <span className="bg-slate-100 text-darkText p-1 inline-flex items-center justify-center rounded-md text-lg duration-200 cursor-pointer">
              <BsInstagram />
            </span>
            <span className="bg-slate-100 text-darkText p-1 inline-flex items-center justify-center rounded-md text-lg hover:text-red-600 duration-200 cursor-pointer">
              <BsYoutube />
            </span>
            <span className="bg-slate-100 text-darkText p-1 inline-flex items-center justify-center rounded-md text-lg hover:text-blue-400 duration-200 cursor-pointer">
              <BsTwitter />
            </span>
          </div>
        </div>
        <div>
          <p className="text-lg">¡Contáctanos!</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
            <li className="flex flex-col">
              <AiOutlineMail className="text-lg" />
              <span className="text-slate hover:text-slate-500 duration-200">
                Correo Eletrónico:
              </span>{" "}
              <span className="text-slate-500">
                <a
                  href="mailto:johangonzalez112@gmail.com"
                  target="_blank"
                  title="Envíame un correo electrónico"
                >
                  johangonzalez112@gmail.com
                </a>
              </span>
            </li>

            <li className="flex flex-col">
              <BsTelephone className="text-lg" />
              <span className="text-slate hover:text-slate-500 duration-200">
                Teléfono:
              </span>{" "}
              <span className="text-slate-500">5543670010</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg">Links</p>
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <li className="hover:text-slate-500 cursor-pointer duration-200">
                Inicio
              </li>
            </Link>
            <Link href={"/cart"}>
              <li className="hover:text-slate-500 cursor-pointer duration-200">
                Carrito
              </li>
            </Link>
            <Link href={"/"}>
              <li className="hover:text-slate-500 cursor-pointer duration-200">
                Acerca de
              </li>
            </Link>
            <Link href={"/"}>
              <li className="hover:text-slate-500 cursor-pointer duration-200">
                Newsletter
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-lg mb-2">
            ¡Puedes pagar con los siguientes servicios!
          </p>
          <Image
            className="w-full h-10 object-cover"
            src={payment}
            alt="Payment banner image"
          />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
