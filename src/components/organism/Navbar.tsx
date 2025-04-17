"use client";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenuIcon from "../atoms/HamburgerMenuIcon";
import React, { useState } from "react";
import XIcon from "../atoms/XIcon";
import ButtonLink from "../atoms/Button";
import { dataNavMenu } from "@/types/navbarTypes";
interface propsNavbar{
    navMenu:dataNavMenu[]
}
const Navbar:React.FC<propsNavbar> = ({navMenu}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  return (
    <header className="sticky top-0 shadow z-30">
      <nav className="w-full px-4 lg:px-10 py-[10px] bg-white flex items-center justify-between shadow z-10 relative">
        <div className="lg:hidden z-20 ">
          <button
            onClick={() => setIsMobile((prev) => !prev)}
            className="h-[39px] flex items-center"
          >
            {isMobile ? <XIcon /> : <HamburgerMenuIcon />}
          </button>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:left-0 flex items-center gap-1">
          <Image
            src="/assets/images/logo.png"
            alt="Logo Aviary Bird"
            width={45.6}
            height={46}
          />
          <h1 className="font-bold font-merriweather leading-4">
            Aviary
            <br />
            Bird
          </h1>
        </div>
        <div className="hidden lg:flex items-center gap-8 font-bold font-merriweather ml-auto lg:ml-0">
          {navMenu.map((item, index) => (
            <Link key={index} href={item.url} className="hover:text-blue-500">
              {item.title}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex gap-1 ml-4">
          <ButtonLink title="Our Work" />
          <ButtonLink title="Get Involve" />
        </div>
      </nav>
      {isMobile && (
        <div
          className="lg:hidden w-full bg-black/50 fixed"
          style={{ height: "calc(100vh - 59px)" }}
        >
          <div className="w-fit h-full flex bg-white flex-grow flex-col justify-between">
            <div className="flex flex-col gap-3 font-bold font-merriweather p-4">
              {navMenu.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="hover:text-blue-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-1 p-4">
              <button className="py-1 px-4 border-[1px] border-foreground rounded-full font-roboto">
                Our Work
              </button>
              <button className="py-1 px-4 border-[1px] border-foreground rounded-full">
                Get Involve
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
