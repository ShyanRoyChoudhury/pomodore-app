interface HeaderProps{
    children: React.ReactNode,
    className?: string;
}

const Header: React.FC<HeaderProps> = ({children, className}) => {
    return(
        <div style={{backgroundColor:"#112D4E"}} className="flex">
            {children}
        </div>
    )
}

export default Header;