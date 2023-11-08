import { twMerge } from "tailwind-merge";

interface BoxProps{
    children: React.ReactNode;
    className?: string
}

const Box: React.FC<BoxProps> = ({children, className}) => {
    return(
        <div className={twMerge(`
        flex 
        justify-center 
        bg-neutral-900
        rounded-lg
        w-[300px]
        h-[250px]
        p-2
        `, className)}>
            {children}
        </div>
    )
}

export default Box;