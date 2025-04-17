import Link from "next/link"
import CardCommunity from "../molecules/CardCommunity"
import React from "react";
import { dataCommunity } from "@/types/communityTypes";
interface propsCommunity {
    data:dataCommunity[]
}
const Community:React.FC<propsCommunity> = ({data}) => {
    return(
        <div className="flex flex-col w-full lg:w-[50%] lg:px-10">
            <div className="px-4 pt-2 pb-1 flex justify-between items-center">
                <h2 className="font-semibold text-lg lg:text-[28px]">Komunitas</h2>
                <Link href={"/"} className="text-xs lg:text-sm underline lg:no-underline">See All</Link>
            </div>
            <div className="flex flex-col px-4">
                {data.map((item,index)=>(
                <CardCommunity
                    key={index}
                    src={item.src}
                    username={item.username}
                    content={item.content}/>
                ))}
            </div>
        </div>
    )
}
export default Community