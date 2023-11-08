interface HeaderProps{
    children: React.ReactNode,
    className?: string;
}

const Header: React.FC<HeaderProps> = ({children, className}) => {
    return(
        <div className="flex">
            {children}
        </div>
    )
}

export default Header;