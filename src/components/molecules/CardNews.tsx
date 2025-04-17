"use client"
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
interface propsCardNews {
  title: string;
  desc: string;
  url: string;
}
const CardNews: React.FC<propsCardNews> = ({ title, desc, url }) => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <Link
      href={"/"}
      className="flex gap-3 py-1 items-center hover:bg-gray-100 rounded"
      data-aos="fade-down"
    >
      <div className="rounded min-w-[80px] h-[64px]  lg:min-w-[245px] lg:min-h-[130px] relative overflow-hidden">
        <Image src={url} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-[2px] py-1 lg:py-[10px]">
        <h3 className="font-semibold lg:text-2xl">{title}</h3>
        <p className="line-clamp-3 text-neutral-400 text-sm lg:lext-lg">{desc}</p>
      </div>
    </Link>
  );
};
export default CardNews;
