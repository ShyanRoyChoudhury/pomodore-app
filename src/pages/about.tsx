import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function about(){
    
    return(
        <div>
            <div className='h-full w-full'>
                <Header /> 
            </div>

            <div className=" flex justify-center items-center text-xl italic font-sans font-semibold text-gray-600 p-32">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                   cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.

            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
