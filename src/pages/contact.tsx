import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { BiLogoGmail } from 'react-icons/bi';

export default function contact(){
    return(
        <div>
            <div className='h-full w-full'>
                <Header /> 
            </div>
            
            <div className="flex justify-center">
                <div className="flex-row text-red-600 pt-40 text-4xl">
                    <BiLogoGmail />
                </div>
                <div className="flex-row">
                    <h2 className="text-2xl 
                    font-semibold 
                    font-sans 
                    pt-40
                    pl-4  
                    text-gray-500
                    "
                    >Shayan.roy31@gmail.com</h2>
                </div>
            </div>
            <div className="cfooter">
                <Footer/>
            </div>
        </div>
    )
}

