"use client"
import { useState, useEffect } from 'react';

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        } else if (!isRunning && time !== 0)  {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, time]);

    const formatTime = (time) => {
        const minutes = Math.floor((time % 3600000) / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);

        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(2, "0")}`;
    }
    return (
        <div className='flex flex-col items-center justify-center h-screen'> 
            <div>
                <h1 className='mb-4 text-4xl font-extrabold'> This is a Stopwatch </h1>
                <p className='my-10 text-center text-3xl'> {formatTime(time)}</p>
                <div className='flex justify-between gap-4'>
                    <button onClick={
                            () => setIsRunning(!isRunning)
                            
                            } 
                            className={!isRunning ? 'cursor-pointer rounded-full font-bold text-green-500 text-sm bg-green-950 hover:bg-green-950/50 w-16 h-16 grow-0' : 'cursor-pointer rounded-full font-bold text-red-500 text-sm bg-red-950 hover:bg-red-950/50 w-16 h-16 grow-0'}>
                        {isRunning ? 'Stop' : 'Start'}
                    </button>
                    <button 
                        onClick={ () => {
                            setTime(0);
                            setIsRunning(false);
                        }}
                        className='cursor-pointer rounded-full font-bold text-sm bg-gray-700/75 hover:bg-gray-700/25 w-16 h-16 grow-0'>
                        Reset
                    </button>
                </div>
                <div className='my-2 border-b border-gray-700/75 w-full'></div>
            </div>
        </div>
    )
}