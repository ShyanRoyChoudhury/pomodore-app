import Clock from 'react-live-clock'
const ClockDisplay = () =>{
    return(
        <div>
            <Clock format={'h:mm:ssa'} 
            style={{fontSize: '2.5em'}} 
            ticking={true}/>
        </div>
    )
}

export default ClockDisplay;