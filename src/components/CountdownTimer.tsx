import { ClockIcon } from '@heroicons/react/24/solid';
import {useEffect, useState, useRef} from 'react'

interface Props{
    seconds: number;
    boop: boolean;
    setBoop: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CountdownTimer({seconds, boop, setBoop}:Props){

    const [time, setTime] = useState(seconds);
    const [expired, setExpired] = useState(false);
    const [running, setRunning] = useState(false);
    let intervalRef:any = useRef();

    function tick(){
        setTime((prev) => prev -1);
    }

    function startTimer(){
        intervalRef.current = setInterval(tick, 1000);
        setRunning(true);
    }

    function stopTimer(){
        setTime(seconds);
        setExpired(false);
        setRunning(() => false);
        clearInterval(intervalRef.current);
    }

    function handleClick(){
        if (running) {
            // setTime(seconds);
            // setExpired(false);
            // setRunning(() => false);
            // clearInterval(intervalRef.current);
            stopTimer();
        } else{
            // intervalRef.current = setInterval(tick, 1000);
            // setRunning(true);
            startTimer();
        }
    }

    function timerColor(){
        if (running && !expired){
            return 'bg-pink-300'
        }
        if (expired){
            return 'bg-red-500'
        }
        if(!running){
            return 'bg-green-200'
        }
    }

    useEffect(() => {
        if (time<= 0 && !expired ){
            setExpired(true)
        }   
    })

    useEffect(() => {
        console.log({boop})
        if (!running){
            startTimer();
        }
       
    },[boop])

    return (
        <div>
            <button className={`text-5xl w-full text-slate-900 flex justify-center items-center ${timerColor()}`}
            onClick={() => handleClick()}>
                <ClockIcon className="w-10 h-10"/>
                {time}
            </button>
        </div>
    )
}
