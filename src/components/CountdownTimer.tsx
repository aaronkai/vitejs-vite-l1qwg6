import { ClockIcon } from "@heroicons/react/24/solid";
import { useEffect, useState, useRef } from "react";

interface Props {
  seconds: number;
  boop: boolean;
  setBoop: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CountdownTimer({ seconds, boop, setBoop, timer, setTimer }: Props) {
  const [time, setTime] = useState(seconds);
  const [expired, setExpired] = useState(false);
  const [running, setRunning] = useState(false);
  let intervalRef: any = useRef();

  function tick() {
    setTime((prev) => prev - 1);
  }

  function start() {
    console.log("start fired")
    stop();
    intervalRef.current = setInterval(tick, 1000);
    setRunning(true);
  }

  function stop() {
    console.log("stop fired")
    setTime(seconds);
    setExpired(false);
    setRunning(() => false);
    clearInterval(intervalRef.current);
  }

  function restart(){
    stop();
    start();
  }

  function handleClick() {
    if (running) {
      stop();
    } else {
      start();
    }
  }

  function timerColor() {
    if (running && !expired) {
      return "bg-pink-300";
    }
    if (expired) {
      return "bg-red-500";
    }
    if (!running) {
      return "bg-green-300";
    }
  }

  useEffect(() => {
    if (time <= 0 && !expired) {
      setExpired(true);
    }
  }, [time, expired]);

  useEffect(() => {
    console.log("inside timer use effect");
    console.log({timer})
    if (timer.startTimer) {
      console.log("starting Timer");     
      start();
      setTimer((prevState) => ({
        ...prevState,
        startTimer: false,
      }))
    }
    if (timer.stopTimer){
      console.log("stopping Timer");
      stop();
    
      setTimer((prevState) => ({
        ...prevState,
        stopTimer: false,
      }))
    }
    if (timer.restartTimer){
      console.log("restarting Timer");
      restart;
    }
  },[timer])

  return (
    <div>
      <button
        className={`text-5xl w-full text-slate-900 flex justify-center items-center ${timerColor()}`}
        onClick={() => handleClick()}
      >
        <ClockIcon className="w-10 h-10" />
        {time}
      </button>
    </div>
  );
}
