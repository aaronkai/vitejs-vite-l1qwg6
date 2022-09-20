import {useEffect, useState, useRef} from 'react'

interface Props{
    seconds: number;
    // running: boolean;
    // setSeconds: React.Dispatch<React.SetStateAction<number>>;

}
export default function CountdownTimer({seconds}:Props){

    const [time, setTime] = useState(seconds);
    const [expired, setExpired] = useState(false);
    const [running, setRunning] = useState(false);
    let intervalRef:any = useRef();

    function tick(){
        setTime((prev) => prev -1);
    }

    function handleClick(){
        if (running) {
            setTime(seconds);
            setExpired(false);
            setRunning(() => false);
            clearInterval(intervalRef.current);
        } else{
            intervalRef.current = setInterval(tick, 1000);
            setRunning(true);
        }
    }

    useEffect(() => {
        if (time<= 0 && !expired ){
            setExpired(true)
        }   
    })

    return (
        <div>
            <button className={`text-5xl w-full text-slate-900 ${expired ?  'bg-red-500' : 'bg-green-500'}`}
            onClick={() => handleClick()}>
                {time}
            </button>
        </div>
    )
}
