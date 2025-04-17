import Link from "next/link";

interface propsButtonLink {
    title:string;
    url?:string;
}
const ButtonLink:React.FC<propsButtonLink> = ({title, url="/"}) => {
    return(
        <Link href={url} className="py-1 px-4 border-[1px] border-foreground hover:border-0 hover:bg-foreground hover:text-white rounded-full font-roboto">
            {title}
        </Link>
    )
}
export default ButtonLink