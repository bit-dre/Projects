"use client"
import { useState, useEffect } from 'react';

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div className='flex flex-col items-center justify-center h-screen'> 
            <h1 className='mb-4 text-4xl font-extrabold'> This is a Stopwatch </h1>
            <div className='flex justify-evenly'>
                <button className='rounded-full text-sm bg-blue-500'>
                    Start
                </button>
                <button className='rounded-full text-sm bg-blue-500'>
                    Stop
                </button>
            </div>
        </div>
    )
}