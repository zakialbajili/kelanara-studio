"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
interface propsCardCommunity {
    src:string;
    username:string;
    content:string;
}
const CardCommunity:React.FC<propsCardCommunity> = ({src, username, content}) => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <Link
      href={"/"}
      className="flex gap-3 py-2 items-center hover:bg-gray-100 rounded"
      data-aos="fade-down"
    >
      <div className="rounded-full w-[50px] h-[50px] lg:w-[79px] lg:h-[79px] shrink-0 relative">
      <Image src={src} alt={username} width={79} height={79}/>       
      </div>
      <div className="flex flex-col gap-[2px]">
        <h3 className="lg:text-2xl font-semibold">{username}</h3>
        <p className="line-clamp-1 text-neutral-400 text-sm lg:text-lg">
            {content}
        </p>
      </div>
    </Link>
  );
};
export default CardCommunity;
