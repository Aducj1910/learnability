import React, { useState, useEffect } from 'react';
import IconCard from './IconCard';

const SwipeSight = () => {
  const [count, setCount] = useState(3); // Initialize count to 3
  const [seen, setSeen] = useState([]); //keep a track of the icons seen

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
    return <IconCard />

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
    </div>
  );
}

export default SwipeSight;
