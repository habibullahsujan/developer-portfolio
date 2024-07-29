import Link from "next/link";
import { usePathname} from "next/navigation";


export const CustomLink = ({ href, title, className = "" }: { href: string, title: string, className: string }) => {

    const pathname = usePathname()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-0.5 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-500 dark:bg-light ${pathname === href ? "w-full" : "w-0"
                    }`}
            >
                &nbsp;
            </span>
        </Link>
    );
};