import React from 'react';
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

const Collectibles = (props) => {
  const { collectibles, numCollectibles } = props;

  // Array of image sources
  const imageSources = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const names = ["Moss", "Blaze", "Bluey", "Sparky", "Rose", "Chroma", "Pearlwing", "Lavendula", "Sizzlepaw", "Snowy", "Evermore"]

  return (
    <div className="flex-grow flex flex-col ml-10 items-start justify-start mt-7">
      <div className="text-3xl font-bold">Your Collection</div>
      <div className="flex flex-wrap gap-4 mt-4" style={{ maxWidth: '1400px' }}>
        {collectibles.map((collectible) => {
          // Conditionally render CollectibleCard only if the collectible number is within the range of image sources
            return (
              <CollectibleCard
                key={collectible}
                width={275}
                src={imageSources[collectible]}
                description={names[collectible]}
              />
            );
        })}
        {
           Array.from(Array(numCollectibles - collectibles.length).keys()).map((element) => {
            return <CollectibleCard key={element} width={275} src={anon} description={"Not Collected Yet"} />
        })
        
        }
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

export default Collectibles;
