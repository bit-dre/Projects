'use client';
import { useState, useEffect } from 'react';

const FavoriteIcon = ({ className, onMouseEnter, onMouseLeave, onClick, tabIndex }) => (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      <path
        d="M10.3333 2L12.9083 7.21667L18.6667 8.05833L14.5 12.1167L15.4833 17.85L10.3333 15.1417L5.18333 17.85L6.16667 12.1167L2 8.05833L7.75833 7.21667L10.3333 2Z"
        stroke="currentColor"
        strokeWidth="1.67273"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
);
export default function StarRating() {
    const [stars, setStars] = useState(0);
    const [hoveredStars, setHoveredStars] = useState(0);
    const totalStars = 5;

    return ( 
        <div className='flex flex-col items-center justify-center h-screen'>
            <div> 
                <h1 className='mb-4 text-4xl font-extrabold'>
                    Give me a rating out of {totalStars}
                </h1>
                <div className='flex justify-evenly'>
                    {Array.from({length: totalStars}, (_, index) => {
                        const starValue = index + 1;
                        const isFilled = hoveredStars ? starValue <= hoveredStars : starValue <= stars;
                        return (
                            <FavoriteIcon 
                                key={starValue}
                                className={`w-20 cursor-pointer transition-colors ${isFilled ? "text-yellow-400 fill-current" : "text-gray-500 fill-current"}`}
                                onMouseEnter={() => setHoveredStars(starValue)}
                                onMouseLeave={() => setHoveredStars(0)}
                                onClick={() => setStars(starValue)}
                                tabIndex="0"
                            />
                        )
                    })}
                </div>
                <p className='mt-4 text-lg text-center'>
                    {stars > 0 ? `You rated this ${stars} out of ${totalStars}` : " "}
                </p>
            </div>
        </div>
    )
}

