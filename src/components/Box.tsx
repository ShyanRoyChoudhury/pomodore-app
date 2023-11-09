import { twMerge } from "tailwind-merge";

interface BoxProps{
    children: React.ReactNode;
    className?: string
}

const Box: React.FC<BoxProps> = ({children, className}) => {
    return(
        <div style={{backgroundColor:'#3F72AF'}} 
        className={twMerge(`
        flex 
        justify-center 
        bg-739072
        rounded-lg
        w-[350px]
        h-[280px]
        p-2
        `, className)}>
            <div>
                {children}
            </div>
            
        </div>
    )
}

export default Box;