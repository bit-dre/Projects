"use client";
import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="mb-4 text-4xl font-extrabold"> Under me is a Counter Button </h1>
            <button onClick={() => { setCounter((count) => count + 1)} }
                    className="bg-blue-500 hover:bg-blue-700 font-bold cursor-pointer rounded py-2 px-4 "> Press me</button>
            {counter === 0 ? '' : 
            <h4 className="mt-4 text-xl font-xl text-center"> 
                ANOTHER ONE: {counter}
            </h4>
            }
        </div>
    )
}
