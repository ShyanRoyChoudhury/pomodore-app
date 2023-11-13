import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi'
import { useState, useRef, useEffect } from 'react'

function Timer() {

    const [start, setStart] = useState<null | number>(null);
    const [now, setNow] = useState<null | number>(null);
    const [time, setTime] = useState<null | number>(1);
    const [flag, setFlag] = useState<null | boolean>(false);
    let id = useRef<any>(null);

    const startTime = () => {
        setStart(Date.now());
        setNow(Date.now());    
        setFlag(true)
        clearInterval(id.current);
        id.current = setInterval(() => { setNow(Date.now()) }, 10);
    }
  
    const stopTime = () => {
      clearInterval(id.current) 
      //setFlag(false)
    }
    
    let secPassed:any = 0;
    if (start != null && now != null) {
      secPassed = ((now - start) / 1000).toFixed(0);
      }
    
    let timeRem = 0;
    if(time!== null){
      timeRem = time * 60 - secPassed;
      if(timeRem <= 0){
          stopTime()
      }

    }


    function formatTime(totalSeconds: number) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
      
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
      
        return `${formattedMinutes}:${formattedSeconds}`;
    }
    
    function decFun(){
      if (time !== null && time - 5 < 0) {
        alertOption();
      } else {
        setTime((prevCount) => (prevCount !== null ? prevCount - 5 : null));
      };
  }
  
    function alertOption(){
      setTime(null);
      setNow(null)
      alert("Timer cannot be less than 00:00 Min!");
    }

    const handleClick = () => {
      if (flag) {
        stopTime();
      } else {
        setFlag(prev=>!prev)
        startTime();
      }
    }
    return (
      <div className='items-center md:max-w-fit md:max-h-fit'>

        <div className='flex justify-center'>
            <div className='flex justify-center p-4'>
                <div className="flex-1 font-semibold text-8xl">
                      {formatTime(timeRem)}
                    </div>
                
            </div>
        </div>
        
        <div className="flex justify-center my-2">
                <div className='hover:opacity-70'>
                    <button className="px-2 font-semibold text-2xl "
                        onClick={()=>{setTime(1)}}
                    > 
                        1 min 
                    </button>
                </div>
                
                <div className='hover:opacity-70'>
                    <button className="px-2 font-semibold text-2xl"
                    onClick={()=>{setTime(15)}}>
                        15 min
                    </button>
                </div>
                
                <div className='hover:opacity-70'>
                    <button className="px-2 font-semibold text-2xl"
                    onClick={()=>{setTime(25)}}
                    > 
                        25 min 
                    </button>
                </div>
            </div>
            
            <div className="flex justify-center my-4">
                <div className="">
                    <button className='px-2 font-bold text-4xl pt-[1px]'
                        onClick={() => {decFun();}}
                    >
                        <HiOutlineMinusCircle/>
                    </button>
                </div>

                <div className="">
                    <button className='px-2 font-semibold text-2xl'
                    onClick={startTime}
                    >
                        Start
                    </button>
                    <button className='px-2 font-semibold text-2xl'
                    onClick={stopTime}
                    >
                        Stop
                    </button>
                </div>

                <div className="">
                    <button className='px-2 font-bold text-4xl pt-[1px]'
                        onClick={() => { setTime((prevCount:any) => prevCount + 5) }}
                    >
                        <HiOutlinePlusCircle />
                    </button>
                </div>
            </div>

      </div>
    )
  }
  
  export default Timer;