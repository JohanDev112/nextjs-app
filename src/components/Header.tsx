"use client";
import React from "react";
import Logo from "./Logo";
import Container from "./Container";
import { IoMdCart } from "react-icons/io";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start max-w-screen-xl mx-auto px-4 xl:px-0 py-10">
        <Logo />
        {/* Search field*/}
        <div className="w-full bg-white hidden md:flex items-center gap-x-5 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-slate-600 group">
          <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Busca productos..."
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>
        {/* Login/Register */}
        {!session && (
          <div onClick={() => signIn()} className="headerDiv cursor-pointer">
            <AiOutlineUser classname="text-2xl" />
            <p className="text-sm font-semibold">Login/Registro</p>
          </div>
        )}
        {/* Cart button */}
        <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-slate-200 duration-200 relative">
          <IoMdCart classname="text-xl" />
          <p className="text-sm font-semibold">$0.00</p>
          <span className="bg-white text-slate-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
            0
          </span>
        </div>
        {/* User image */}
        {session && (
          <Image
            src={session?.user?.image as string}
            alt="user image"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        )}
        {/* Logout  button*/}
        {session && (
          <div
            onClick={() => signOut()}
            className="headerDiv px-2 gap-x-1 cursor-pointer"
          >
            <FiLogOut classnanme="text-xl" />
            <p className="text-sm font-semibold">Logout</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
