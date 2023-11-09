import Box from '../components/Box';
import Header from '@/components/Header';
import ClockDisplay from '@/components/ClockDisplay';
import { useEffect } from 'react';
import Timer2 from '@/components/Timer2';


export default function Home() {
  
  useEffect(()=>{
    
  }, [])
  return (
    <div>
      <div className='h-full w-full bg-neutral-900'>
        <Header className='mb-5 '>
          <h1 className='font-semibold text-2xl pl-2'>
            FocusTimer
          </h1>
        </Header> 
      </div>
      <div className=' items-center flex justify-center'>
        <div className='mt-96 mb-64'></div>
        <div>
          <Box className=' bg-neutral-100/10'>
            <div>
              <Timer2 />
            </div>
          </Box>
        </div>
      </div>
      
      <div className='flex justify-end pr-10 text-sky-800'>
        <ClockDisplay />
      </div>
    </div>
  )
}
