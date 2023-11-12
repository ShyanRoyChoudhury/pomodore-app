import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface HeaderProps{
    className?: string;
}

const Header: React.FC<HeaderProps> = ({className}) => {
    return(
        <div className={twMerge(`flex mb-5 h-12 shadow-lg bg-gradient-to-r font-semibold 
        from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
        border-none w-full`, className)}>
            
            <h1 className='font-semibold text-3xl pl-2 pt-2'>
                <Link href={'/'}>FocusTimer</Link>
          </h1>
        </div>
    )
}

export default Header;