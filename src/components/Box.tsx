import { twMerge } from "tailwind-merge";

interface BoxProps{
    children: React.ReactNode;
    className?: string
}

const Box: React.FC<BoxProps> = ({children, className}) => {
    return(
        <div style={{backgroundColor:'#427D9D'}} 
        className={twMerge(`
        flex 
        justify-center 
        
        rounded-lg
        w-[300px]
        md:w-[350px]
        Md:h-[280px]
        p-2
        `, className)}>
            <div>
                {children}
            </div>
            
        </div>
    )
}

export default Box;