import Link from "next/link";

interface HeaderProps{
    className?: string;
}

const Header: React.FC<HeaderProps> = ({className}) => {
    return(
        <div style={{backgroundColor:"#112D4E"}} className="flex mb-5">
            
            <h1 className='font-semibold text-2xl pl-2'>
                <Link href={'/'}>FocusTimer</Link>
          </h1>
        </div>
    )
}

export default Header;