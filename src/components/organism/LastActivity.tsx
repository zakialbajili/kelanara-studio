import Link from "next/link";
import CardActivity from "../molecules/CardActivity";
import React from "react";
import { dataActivity } from "@/types/activityTypes";
interface propsLastActivity {
  data:dataActivity[]
}
const LastActivity:React.FC<propsLastActivity> = ({data}) => {
  return (
    <div className="w-full lg:px-10">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-lg lg:text-[28px] font-semibold pt-2 pb-1">
          Pemantauan Populer
        </h2>
        <Link href={"/"} className="text-xs lg:text-sm underline lg:no-underline">
          See All
        </Link>
      </div>
      <div className="w-full flex gap-3 overflow-x-scroll pt-2 pb-3 px-4">
        {data.map((item, index)=>(
          <CardActivity
            key={index}
            urlYoutube={item.urlYoutube}
            title={item.title}/>
        ))}
      </div>
    </div>
  );
};
export default LastActivity;
