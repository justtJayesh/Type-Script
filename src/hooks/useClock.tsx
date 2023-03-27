import { useEffect, useState } from "react";

const useClock = () => {
    // TODO
    // refer readme.md for what to return
    const today = new Date();
    // console.log(today.getDate())
    const [hours, setHours] = useState(today.getHours());
    const [minutes, setMinutes] = useState(today.getMinutes());
    const [seconds, setSeconds] = useState(today.getSeconds());

    useEffect(() => {
        if(seconds >=60){
          setSeconds(0)
          setMinutes(minutes + 1)
        }
        if(minutes >= 60){
          setSeconds(0)
          setMinutes(0)
          setHours(hours+ 1)
        }
        if(hours>=24){
          setSeconds(0)
          setMinutes(0)
          setHours(0)
        }

        let timeInSeconds = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => {
          clearInterval(timeInSeconds)
        };
    }, [seconds]);

    return { hours, minutes, seconds };
};

export default useClock;
