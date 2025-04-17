import HeroHome from "@/components/organism/Hero";
import LastActivity from "@/components/organism/LastActivity";
import Community from "@/components/organism/Community";
import LastNews from "@/components/organism/LastNews";
import Navbar from "@/components/organism/Navbar";

export default function Home() {
  const dataCommunity = [
    {
      src: "/assets/images/avatar1.png",
      username: "John Doe",
      content: "Aktivitas terbaru: Mengikuti patroli hutan di Papua",
    },
    {
      src: "/assets/images/avatar2.png",
      username: "Jane Smith",
      content:
        "Aktivitas terbaru: Membantu mendirikan stasiun pengamatan burung",
    },
  ];
  const dataNews = [
    {
      url: "/assets/images/news1.png",
      title: "Patroli Hutan Terbaruh",
      desc: "Tim kami baru saja menyelesaikan patroli hutan terakhir di Papua.",
    },
    {
      url: "/assets/images/news2.png",
      title: "Workshop Komunitas",
      desc: "Kami akan mengadakan workshop konservasi burung untuk masyarakat lokal.",
    },
    {
      url: "/assets/images/news3.png",
      title: "Komunitas Burung Se-Kabupaten",
      desc: "Komunitas baru saja terbentuk di kabupaten kami!",
    },
    {
      url: "/assets/images/news4.png",
      title: "Pembagian Bibit Tanaman",
      desc: "Komunitas akan membagikan bibit tanaman untuk mendukung habitat burung.",
    },
  ];
  const dataActivity=[
    {
      urlYoutube:"https://www.youtube.com/watch?v=YQCo9rWFgAY",
      title:"Papua - Cendrawasih"
    },
    {
      urlYoutube:"https://www.youtube.com/watch?v=YQCo9rWFgAY",
      title:"Bali - Jalak Bali"
    },
    {
      urlYoutube:"https://www.youtube.com/watch?v=YQCo9rWFgAY",
      title:"Papua - Cendrawasih"
    },
    {
      urlYoutube:"https://www.youtube.com/watch?v=YQCo9rWFgAY",
      title:"Bali - Jalak Bali"
    },
    {
      urlYoutube:"https://www.youtube.com/watch?v=YQCo9rWFgAY",
      title:"Papua - Cendrawasih"
    },
    {
      urlYoutube:"https://www.youtube.com/watch?v=YQCo9rWFgAY",
      title:"Bali - Jalak Bali"
    },
  ]
  const dataNavMenu = [
    {
      title: "Beranda",
      url: "/",
    },
    {
      title: "Lindungi Burung",
      url: "/",
    },
    {
      title: "Donasi",
      url: "/",
    },
    {
      title: "Pemantauan Live",
      url: "/",
    },
  ];
  return (
    <div className="">
      <Navbar navMenu={dataNavMenu}/>
      <HeroHome />
      <LastActivity data={dataActivity}/>
      <div className="flex flex-col lg:flex-row w-full">
        <LastNews data={dataNews} />
        <Community data={dataCommunity} />
      </div>
    </div>
  );
}
