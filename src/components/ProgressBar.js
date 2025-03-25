'use client';
export default function ProgressBar() {
    return (
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className='text-black mb-4 text-4xl font-extrabold'> Progress Bar </h1>
            <div className="flex border-4 border-black h-10 w-full justify-start items-center"> 
                <p className="text-black p-1">Bar</p>
            </div>
        </div>
    )
}