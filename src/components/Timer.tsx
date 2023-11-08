import CountDown from 'react-countdown'

interface TimerProps{
    min: number;
    className?: string
}
function Timer({min, className}: TimerProps){
    return(
        <div className='
            font-bold 
            flex 
            justify-center
            
        '>
            <CountDown date={Date.now() + 1000*60*min}
                />
        </div>
    )
}

export default Timer;