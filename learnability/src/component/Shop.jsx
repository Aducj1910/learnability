import React, { useEffect, useState } from 'react';
import anon from "../imgs/Anon.png";
import img0 from '../imgs/0.png';
import img1 from '../imgs/1.png';
import img2 from '../imgs/2.png';
import img3 from '../imgs/3.png';
import img4 from '../imgs/4.png';
import img5 from '../imgs/5.png';
import img6 from "../imgs/6.png";
import img7 from "../imgs/7.png";
import img8 from "../imgs/8.png";
import img9 from "../imgs/9.png";
import img10 from "../imgs/10.png";
import { FaCoins } from 'react-icons/fa';

const Shop = (props) => {
    const {coins, setCoins} = props;

    const [selectedPack, setSelectedPack] = useState(1); // State to keep track of the selected pack
    const [showPopover, setShowPopover] = useState(false); // State to keep track of the popover visibility
    const [onNumber, setOnNumber] = useState(0);
    const [seed, setSeed] = useState(0);
    
    const imageSources = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const names = ["Moss", "Blaze", "Bluey", "Sparky", "Rose", "Chroma", "Pearlwing", "Lavendula", "Sizzlepaw", "Snowy", "Evermore"]

    useEffect(() => {
        if(showPopover == false){
            setOnNumber(0)
        }
    }, [showPopover])

    const handlePackSelection = (packSize) => {
        setSelectedPack(packSize);
    }

    const handleBuyNow = () => {
        // Logic to handle the purchase based on the selected pack size
        console.log(`Purchasing pack of ${selectedPack} cards`);
        if(selectedPack == 1){
            setCoins(coins - 100);
        }
        if(selectedPack == 3){
            setCoins(coins - 250);
        }
        if(selectedPack == 5){
            setCoins(coins - 450);
        }
        nextClick();
        setShowPopover(true); // Show the popover when Buy Now button is clicked
    }

    const nextClick = () => {
        setOnNumber(onNumber + 1);
        var randomNumber = Math.floor(Math.random() * 11);
        setSeed(randomNumber);

    }

    const getIfDisabled = () => {
        if(selectedPack == 1){
            if(coins < 100){
                return true;
            }
        }
        if(selectedPack == 3){
            if (coins < 250){
                return true;
            }
        }
        if(selectedPack == 5){
            if(coins < 450){
                return true;
            }
        }

        return false;
    }

    return (
        <div className="container mx-auto flex-grow h-screen flex flex-col items-center justify-start mt-7">
            <h1 className="text-3xl font-bold text-center">Card Shop</h1>
            <div className="flex justify-center mt-8">
                <div className="w-110 bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-4 text-center">Select a pack</h2>
                    <div className="flex justify-center">
                        <button
                            className={`relative w-40 h-40 mr-4 rounded-lg border-4 border-primary ${
                                selectedPack === 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                            }`}
                            onClick={() => handlePackSelection(1)}
                        >
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                <span className="text-5xl font-bold absolute bottom-20 right-0 left-0 text-center mb-2">1</span>
                                <span className="text-lg font-semibold absolute bottom-10 right-0 left-0 text-center mb-2">Cards</span>
                                <span className="text-lg font-semibold absolute bottom-2 right-0 left-0 text-center mb-2">Price: 100</span>
                            </div>
                          
                        </button>
                        <button
                            className={`relative w-40 h-40 mr-4 rounded-lg border-4 border-primary ${
                                selectedPack === 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                            }`}
                            onClick={() => handlePackSelection(3)}
                        >
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                            <span className="text-5xl font-bold absolute bottom-20 right-0 left-0 text-center mb-2">3</span>
                                <span className="text-lg font-semibold absolute bottom-10 right-0 left-0 text-center mb-2">Cards</span>
                                <span className="text-lg font-semibold absolute bottom-2 right-0 left-0 text-center mb-2">Price: 250</span>
                            </div>
                          
                        </button>
                        <button
                            className={`relative w-40 h-40 rounded-lg border-4 border-primary ${
                                selectedPack === 5 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                            }`}
                            onClick={() => handlePackSelection(5)}
                        >
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                            <span className="text-5xl font-bold absolute bottom-20 right-0 left-0 text-center mb-2">5</span>
                                <span className="text-lg font-semibold absolute bottom-10 right-0 left-0 text-center mb-2">Cards</span>
                                <span className="text-lg font-semibold absolute bottom-2 right-0 left-0 text-center mb-2">Price: 450</span>
                            </div>
                          
                        </button>
                    </div>

                    <button
                         className={`block mx-auto mt-8 px-6 py-3 text-lg font-semibold rounded bg-primary text-white ${
                            getIfDisabled() ? "opacity-50" : ""}`}
                        onClick={handleBuyNow}
                        disabled={getIfDisabled()}
                    >
                        Buy Now
                    </button>
                    {showPopover && (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
        {/* Popover content */}
        <div className="bg-white rounded p-8 max-w-md flex flex-col justify-center items-center">
            <CollectibleCard width={275} src={imageSources[seed]} description={names[seed]} />
            {/* Close button */}
            <button
                className="mt-4 px-4 py-2 text-white font-semibold bg-gray-500 rounded"
                onClick={onNumber < selectedPack ? () => nextClick() : () => setShowPopover(false)}
            >
                {onNumber < selectedPack ? "Next" : "Close"}
            </button>
        </div>
    </div>
)}


                </div>
            </div>
        </div>
    );
};

const CollectibleCard = ({ src, description, width }) => (
    <div className="relative rounded" style={{ width: width }}>
      <img className="rounded-xl" src={src} width={width} alt={description} />
      <div
        className="absolute z-0 bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent 
      opacity-80 transition-opacity duration-300 flex justify-center items-center 
      hover:cursor-pointer"
      >
        <div className="text-center text-2xl text-white">{description}</div>
      </div>
    </div>
  );

export default Shop;
