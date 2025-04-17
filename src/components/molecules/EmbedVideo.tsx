'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import PauseIcon from '../atoms/PauseIcon';

const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });
interface propsEmbededVideo {
    url:string;
}
const CustomYouTubePlayer:React.FC<propsEmbededVideo> = ({url}) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(true);

  return (
    <div className="min-w-[379px] min-h-[188px] rounded bg-black flex items-center justify-center relative">
      <div className="aspect-video w-full rounded overflow-hidden">
        <ReactPlayer
          url={url}
          playing={playing}
          controls={false}
          width="100%"
          height="100%"
        />
      </div>
      <div
        className='absolute inset-0 w-full h-full flex justify-center items-center'
        onMouseEnter={()=>{
            setIsShow(true)
        }} 
        onMouseLeave={()=>setIsShow(false)}
    >
      {isShow && (
        <button
          onClick={() => {
            setPlaying((prev)=>(!prev))
            setIsShow((prev)=>(!prev))
        }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-gray-500/50 backdrop-blur-2xl flex justify-center items-center z-10 pl-1"
        >
            <PauseIcon />
        </button>
        )}
      </div>
    </div>
  );
}
export default CustomYouTubePlayer