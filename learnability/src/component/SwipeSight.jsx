import React, { useState, useEffect } from 'react';
import IconCard from './IconCard';

const SwipeSight = () => {
  const [count, setCount] = useState(3); // Initialize count to 3
  const [seen, setSeen] = useState([]); // Keep track of the icons seen

  useEffect(() => {
    // Use setTimeout to decrement count every second
    const timer = setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    // Clean up the timer when the component unmounts or count reaches 0
    return () => clearTimeout(timer);
  }, [count]);

  const getIcon = () => {
    // Return the IconCard component
    return (
        <div class="bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 rounded-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition duration-300 ease-in-out p-8 w-48 h-48">
        <div class="flex justify-center items-center h-full text-white">
          <IconCard class="text-6xl" />
        </div>
      </div>
      

      

    )
  }

  return (
    <div className="flex-grow h-screen flex flex-col items-center justify-center mt-7">
      <div className="text-3xl font-bold">
        Get Ready!
      </div>
      <div className="text-5xl font-bold mt-5">
        {count === 0 ? (
          <div>
            {getIcon()}
          </div>
        ) : (
          <div>
            {count}
          </div>
        )}
      </div>
      <div className="flex mt-5">
        {seen.map((icon, index) => (
          <div key={index} className="mr-3">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SwipeSight;
