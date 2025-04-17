"use client"
import React, { useEffect } from "react";
import CustomYouTubePlayer from "./EmbedVideo";
import AOS from 'aos';
import 'aos/dist/aos.css';
interface propsCardActivity {
  title: string;
  urlYoutube:string;
}
const CardActivity: React.FC<propsCardActivity> = ({ title, urlYoutube }) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',   
    day: '2-digit',    
    month: 'long',     
    year: 'numeric',   
  };
  const date = new Date().toLocaleDateString('id-ID', options);
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div
      className="flex flex-col gap-3"
      data-aos="fade-left"
    >
      <CustomYouTubePlayer url={urlYoutube}/>
      <div className="flex flex-col">
        <h3 className="lg:text-2xl font-semibold">{title}</h3>
        <div className="hidden lg:flex items-center gap-[2px]">
          <div className="flex bg-red-500 w-[5px] h-[5px] rounded-full"></div>
          <p className="text-sm text-gray-400">Sedang Live</p>
        </div>
        <p className="lg:hidden text-gray-400 text-xs">{date}</p>
      </div>
    </div>
  );
};
export default CardActivity;
