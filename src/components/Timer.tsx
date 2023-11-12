import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi'
import { useState, useRef, useEffect } from 'react'

function Timer() {

    const [start, setStart] = useState(null);
    const [now, setNow] = useState(null);
    const [time, setTime] = useState(null);
    const [flag, setFlag] = useState(false);
    let id = useRef(null);

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
    
    
    let timeRem = time * 60 - secPassed;
    if(timeRem <= 0){
        stopTime()
    }


    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
      
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
      
        return `${formattedMinutes}:${formattedSeconds}`;
    }
    
    function decFun(){
      time - 5 < 0 ?
          alertOption()
          : setTime(prevCount => prevCount - 5);
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
      <div className='items-center max-w-fit max-h-fit'>

        <div style={{display: 'flex'}}>
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
                    <button className='px-2 font-bold text-2xl pt-[4px]'
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
                    onClick={decFun}
                    >
                        Stop
                    </button>
                </div>

                <div className="">
                    <button className='px-2 font-bold text-2xl pt-[4px]'
                        onClick={() => { setTime(prevCount => prevCount + 5) }}
                    >
                        <HiOutlinePlusCircle />
                    </button>
                </div>
            </div>

      </div>
    )
  }
  
  export default Timer;