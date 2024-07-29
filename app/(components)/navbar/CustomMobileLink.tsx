import { usePathname, useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type TCustomMobileLinkProps = {
    href: string;
    title: string;
    className?: string;
    toggle: () => Dispatch<SetStateAction<boolean>>;
}

export const CustomMobileLink = ({ href, title, className = "", toggle }: TCustomMobileLinkProps) => {
    const pathname = usePathname();
    const router = useRouter()
    const handleClick = () => {
        toggle();
        router.push(href);
    };
    return (
        <button className={`${className} relative group`} onClick={handleClick}>
            {title}
            <span
                className={`h-0.5 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-400 dark:bg-light ${pathname === href ? "w-full" : "w-0"
                    }`}
            >
                &nbsp;
            </span>
        </button>
    );
};