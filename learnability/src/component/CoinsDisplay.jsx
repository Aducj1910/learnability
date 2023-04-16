import React, { Component } from 'react';
import { FaCoins } from 'react-icons/fa';

const CoinsDisplay = (props) => {
    const {coins} = props;

    return ( 
        <div className="fixed top-0 right-0 h-screen w-100 pr-5 py-5 flex">
        <Counter count={coins} />
        </div>
     );
}

const Counter = ({count}) => (
    <div className="relative flex bg-gray-900 text-white px-7 py-7 rounded-2xl h-10 w-100 items-center justify-center">
        <div className="relative flex w-50">
            <FaCoins size="28" />
        </div>
        <div className="ml-10 font-body text-2xl w-50">
            {count}
        </div>
        
    </div>
)

 
export default CoinsDisplay;