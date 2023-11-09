import { AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineMinusCircle } from 'react-icons/hi'
import { useEffect, useRef, useState } from "react"

export default function Timer2(){
    const [ time, setTime ] = useState(0);
    const [ seconds, setSeconds ] = useState(0);
    const [ sec, setSec ] = useState(0);
    const [ start, setStart ] = useState(false);

    const id = useRef<number | null>(null)

    function decFun(){
        time - 5 < 0 ?
            alertOption()
            : setTime(prevCount => prevCount - 5);
    }
    
    function alertOption(){
        setTime(0);
        setSeconds(0);
        alert("Timer cannot be less than 00:00 Min!");
    }

    useEffect(()=>{
        document.title = `${time < 10 ? '0' + time : time}:${seconds < 10 ? '0' + seconds : seconds - 1} FocusTimer`
      }, [sec])

    useEffect(()=>{
        if(start){
            console.log('start')
            startTimer()
        }
        else if(!start){
            console.log('stop');
            setStart(false)
            stopTimer()
        }
    },[start]);


    const startTimer = () => {
        console.log('start')
        id.current = setInterval(() => {
            setSec(prev => prev + 1);
            console.log('inter')
        }, 1000) as unknown as number
        // id.current = interval;
    }

    useEffect(()=>{
        if(sec!=0 && start){
            if(seconds == 0 && time == 0){
                stopTimer();
                setStart(false)
            }
            else if(seconds == 0){
                setSeconds(59);
                setTime(time => time - 1)
            }
            else{
                setSeconds(seconds => seconds - 1)
            }
        }
    }, [sec])

    const stopTimer = () => {
        console.log(id)
        setSeconds(0); setTime(0)
        clearInterval(id.current)
    }


    return(
        <div className="items-center  max-w-fit max-h-fit">
            <div className="flex justify-center p-4">
                
                <div className="flex-1 font-semibold text-7xl">
                    {time < 10 ? '0' + time : time}
                </div>
                <div className="flex-1 font-semibold text-7xl">
                    :
                </div>
                <div className="flex-1 font-semibold text-7xl">
                    {seconds < 10 ? '0' + seconds : seconds}
                </div>
            </div>

            <div className="flex justify-center">
                <button className="px-2 "
                    onClick={()=>{setTime(1)}}
                > 
                    1 min 
                </button>
                
                <button className="px-2"
                 onClick={()=>{setTime(15)}}>
                    15 min
                </button>
                
                <button className="px-2"
                onClick={()=>{setTime(25)}}
                > 
                    25 min 
                </button>
                
            </div>
            
            <div className="flex justify-center">
                <div className="flex-1">
                    <button
                        onClick={() => { decFun(); }}
                    >
                        <HiOutlineMinusCircle/>
                    </button>
                </div>

                <div className="flex-1">
                    <button onClick={()=>{
                        setStart((prevStart) => !prevStart); 
                        console.log('call')}}
                    >
                        {start ? 'Stop': 'Start'}
                    </button>
                </div>

                <div className="flex-1">
                    <button
                        onClick={() => { setTime(prevCount => prevCount + 5) }}
                    >
                        <AiOutlinePlus />
                    </button>
                </div>
            </div>
        </div>
    )
}
