import Timer from '@/components/Timer'
import Box from '../components/Box';
import Header from '@/components/Header';
import ClockDisplay from '@/components/ClockDisplay';
import { useState } from 'react';

export default function Home() {
  const [timerVal, setTimerVal] = useState(25);

  const handleTimerval = (val:number) => {setTimerVal(val)};

  return (
    <div>
      <div className='h-full w-full bg-neutral-900'>
        <Header className='mb-5 '>
          <h1 className='font-semibold text-2xl pl-2'>
            pomosite
          </h1>
        </Header> 
      </div>
      <div className=' items-center flex justify-center'>
        <div className='mt-96 mb-64'></div>
        <div>
          <Box className='flex-col bg-neutral-100/10'>
            <div className='flex justify-center'>
              <div className='flex-1 flex justify-center'>
                <button onClick={()=> handleTimerval(25)}>25-min</button>
              </div>
              <div className='flex-1 flex justify-center'>
                <button onClick={()=> handleTimerval(5)}>5-min</button>
              </div>
              <div className='flex-1 flex justify-center'>
                <button onClick={()=> handleTimerval(45)}>45-min</button>
              </div>
            </div>
            <div>
              <Timer min={timerVal}/>
            </div>
            <div className='flex-col
              relative'>
              <button className='
              absolute
              bg-emerald-400
              rounded-full
              px-4
              py-1
              text-black
              font-bold
              hover:opacity-75
              transition
              border
              border-transparent
              hover:scale-110
              right-6
              '
              onClick={()=>{alert('Hurray')}}
              > 
                click
              </button>

            </div>
          </Box>
        </div>
      </div>
      <div className='flex justify-end pr-10'>
        <ClockDisplay />
      </div>
</div>
  )
}
