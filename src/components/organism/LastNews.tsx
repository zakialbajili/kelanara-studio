import Link from "next/link";
import CardNews from "../molecules/CardNews";
import { dataNews } from "@/types/newsTypes";
interface propsLastNews {
    data:dataNews[]
}
const LastNews:React.FC<propsLastNews> = ({data}) => {
  return (
    <div className="flex flex-col w-full lg:w-[50%] lg:px-10">
      <div className="px-4 pt-2 pb-1 flex justify-between items-center">
        <h2 className="font-semibold text-lg lg:text-[28px]">Berita Terbaru</h2>
        <Link
          href={"/"}
          className="text-xs lg:text-sm underline lg:no-underline"
        >
          See All
        </Link>
      </div>
      <div className="flex flex-col px-4">
        {data.map((item, index) => (
          <CardNews
            key={index}
            url={item.url}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};
export default LastNews;
