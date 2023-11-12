import Box from '../components/Box';
import Header from '@/components/Header';
import ClockDisplay from '@/components/ClockDisplay';
import Footer from '@/components/Footer';
import Timer from '@/components/Timer';

export default function Home() {
  
  return (
    <div>
      <div className='h-full w-full'>
        <Header /> 
      </div>
      <div className=' items-center flex justify-center'>
        <div className='mt-96 mb-60'></div>
        <div>
          <Box className='  hover:scale-105 transition'>
            <div>
              <Timer />
            </div>
          </Box>
        </div>
      </div>
      
      <div className='flex justify-end pr-10 text-sky-800 font-semibold'>
        <ClockDisplay />
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}
