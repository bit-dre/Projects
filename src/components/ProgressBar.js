'use client';

import { useRef, useState } from "react";

const timers = [
    {id: 1, title: "1s", color: "bg-red-500", time: "1000"},
    {id: 2, title: "10s", color: "bg-green-500", time: "10000"},
    {id: 3, title: "30s", color: "bg-blue-500", time: "30000"}, 
    {id: 4, title: "60s", color: "bg-purple-500", time: "60000"},
]

export default function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const [progressColor, setProgressColor] = useState("bg-gray-300");
    const intervalRef = useRef(null);

    const toggleProgress = (time, color) => {
        setProgress(0);
        setProgressColor(color);
        if (intervalRef.current) clearInterval(intervalRef.current);

        const updateInterval = 100;
        const totalSteps = time / updateInterval;
        const increase = 100 / totalSteps;
        intervalRef.current = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(intervalRef.current);
                    return 100;
                }
                return Math.min(prev + increase, 100);
            });
        }, updateInterval)
    }
    return (
        <div className="flex flex-col items-center justify-center p-8">
            <div className="flex flex-col gap-2 mb-4">
                <h1 className='text-black mb-4 text-4xl font-extrabold'> Progress Bar </h1>
                <div className="flex justify-between">
                    {timers.map((time) => (
                        <button
                            key={time.id}
                            className={`${time.color} rounded-lg text-center text-xl p-2 cursor-pointer w-12 h-12`}
                            onClick={() => toggleProgress(time.time, time.color)}
                            >
                            {time.title}
                        </button>
                    ))}
                </div>
            </div>
            <div className={`flex border-4 border-black h-10 w-full justify-start items-center rounded-full overflow-hidden`}>
                <div className={`h-full flex ${progressColor} justify-end items-center transition-all duraction-200`}
                     style={{ width: `${progress}%` }}>
                     {progress > 0 && <p className="text-black pr-2">{Math.round(progress)}%</p>}
                </div> 
            </div>
        </div>
    )
}

// with useEffect

// import { useState, useEffect } from "react";

// const timers = [
//     {id: 1, title: "1s", color: "bg-red-500", time: 1000},
//     {id: 2, title: "10s", color: "bg-green-500", time: 10000},
//     {id: 3, title: "30s", color: "bg-blue-500", time: 30000}, 
//     {id: 4, title: "60s", color: "bg-purple-500", time: 60000},
// ];

// export default function ProgressBar() {
//     const [progress, setProgress] = useState(0);
//     const [progressColor, setProgressColor] = useState("bg-gray-300"); // Default color
//     const [selectedTime, setSelectedTime] = useState(null);

//     useEffect(() => {
//         if (!selectedTime) return;

//         setProgress(0); // Reset progress when a new button is clicked
//         const updateInterval = 100;
//         const totalSteps = selectedTime / updateInterval;
//         const increase = 100 / totalSteps;

//         let interval = setInterval(() => {
//             setProgress(prev => {
//                 if (prev >= 100) {
//                     clearInterval(interval);
//                     return 100;
//                 }
//                 return Math.min(prev + increase, 100);
//             });
//         }, updateInterval);

//         return () => clearInterval(interval); // Cleanup interval when dependencies change
//     }, [selectedTime]); // Runs whenever `selectedTime` changes

//     return (
//         <div className="flex flex-col items-center justify-center p-8">
//             <h1 className='text-black mb-4 text-4xl font-extrabold'>Progress Bar</h1>
            
//             {/* Buttons */}
//             <div className="flex gap-2 my-4">
//                 {timers.map((timer) => (
//                     <button
//                         key={timer.id}
//                         className={`${timer.color} rounded-lg text-center text-xl p-2 cursor-pointer w-12 h-12`}
//                         onClick={() => {
//                             setSelectedTime(timer.time);
//                             setProgressColor(timer.color);
//                         }}
//                     >
//                         {timer.title}
//                     </button>
//                 ))}
//             </div>

//             {/* Progress Bar */}
//             <div className="w-full border-4 border-black h-10 rounded-full overflow-hidden">
//                 <div 
//                     className={`h-full ${progressColor} flex justify-end items-center transition-all duration-200`}
//                     style={{ width: `${progress}%` }}
//                 >
//                     {progress > 0 && <p className="text-black pr-2">{Math.round(progress)}%</p>}
//                 </div>
//             </div>
//         </div>
//     );
// }
