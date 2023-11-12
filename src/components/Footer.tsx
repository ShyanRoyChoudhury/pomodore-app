import { twMerge } from "tailwind-merge";
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { RiTwitterXFill } from 'react-icons/ri';
import { AiTwotoneHeart } from 'react-icons/ai';
import Link from "next/link";

interface FooterProps{
    className?: string;
}

const Footer: React.FC<FooterProps> = ({className}) => {
    const defaultClasses = "bg-slate-400";
    
    return(
    <div className={twMerge(defaultClasses, className)}>
        <div className="relative text-black pt-8 pb-6">

        <div className='container mx-auto px-8'>
            <div className='flex flex-wrap text-left lg:text-left'>
              <div className='w-full lg:w-6/12 px-4'>
                <h4 className='text-3xl font-semibold text-gray-700'>
                    Let's keep in touch!
                </h4>
                <h5 className='text-lg mt-0 mb-2 text-gray-600'>
                  Find me on any of these platform, I will respond in 1-2 business days.
                </h5>
                <div className='mt-6 lg:mb-0 mb-6 flex'>
                  <a className='bg-white  shadow-lg font-normal h-10 w-10 
                                      items-center flex justify-center align-center rounded-full 
                                      outline-none focus:outline-none mr-2' 
                    href='https://github.com/ShyanRoyChoudhury'>
                    <BsGithub/>
                  </a>
                  <a className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 
                                      items-center flex justify-center align-center rounded-full 
                                      outline-none focus:outline-none mr-2" 
                    href='https://linkedin.com/in/shyan-roy-choudhury-79a860198'>
                  <AiFillLinkedin/>
                  </a>
                  <a className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 
                                      items-center flex justify-center align-center rounded-full 
                                      outline-none focus:outline-none mr-2"
                    href='https://twitter.com/kenobi8356'>
                    <RiTwitterXFill/>
                  </a>
                </div>
              </div>
              <div className='w-full lg:w-6/12 px-4'>
                <div className='flex flex-wrap items-top mb-6'>
                  <div className='w-full lg:w-4/12 px-4 ml-auto'>
                    <span className='block uppercase text-gray-500 text-sm font-semibold mb-2'>
                      Userful Links
                    </span>
                    <ul className='list'>
                      <li>
                        <Link className='text-gray-600 hover:text-gray-800 font-semibold' href={'/about'}>About</Link>
                      </li>
                      <li>
                        <Link className='text-gray-600 hover:text-gray-800 font-semibold ' href={'/contact'}>Contact</Link>
                      </li>
                      <li>
                        <a className='text-gray-600 hover:text-gray-800 font-semibold' href='https://github.com/ShyanRoyChoudhury'>Github</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300 mx-14"></hr>
          <div className='flex flex-wrap items-center justify-center md:jus'>
            <div className='text-sm text-gray-500 font-semibold py-1'>
              Made With Love By RC 
            </div>
            <div className='px-1 text-gray-500'>
              <AiTwotoneHeart />
            </div>
          </div>
        </div>
    </div>
    )
}

export default Footer;