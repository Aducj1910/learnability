import React, { useEffect, useState } from 'react';
import forest0 from '../imgs/forest0.png';
import forest1 from '../imgs/forest1.png';
import forest2 from '../imgs/forest2.png';
import forest3 from '../imgs/forest3.png';
import wood from '../imgs/wood.png'; // import the wood image

const SpellSafari = (props) => {
  const {coins, setCoins} = props;

  const [isBlurred, setIsBlurred] = useState(true);
  const [index, setIndex] = useState(0);
  const [words, setWords] = useState([]);

  // Array of correct spellings
const right = [
  'Butterfly', 'Forest', 'Squirrel', 'Dolphin', 'Flower', 'Mountain',
  'Elephant', 'Jungle', 'Rainbow', 'Ocean', 'Tree', 'Fox', 'Lake',
  'Bear', 'Penguin', 'Desert', 'Lion', 'Star', 'Giraffe', 'Beach',
  'Kangaroo', 'Butterfly', 'Turtle', 'Coral', 'Frog'
];

// Array of incorrect spellings
const wrong = [
  'Buderfly', 'Forist', 'Skwirl', 'Dolfin', 'FLower', 'Mounten',
  'Eliphant', 'Jungel', 'Rainbaw', 'Oshun', 'Tere', 'Foks', 'Lkae',
  'Bare', 'Pengwin', 'Dessert', 'Loin', 'Stair', 'Giraf', 'Bech',
  'Kangeroo', 'Butterfli', 'Turtel', 'Corel', 'Frgo'
];


  const images = [forest0, forest1, forest2, forest3];

  const setNewWords = () => {
    const randomNumber = Math.floor(Math.random() * 25);
    setWords([right[randomNumber], wrong[randomNumber]])
  }


  useEffect(() => {
    setNewWords();
  }, [isBlurred])

  const handleBlurClick = () => {
    setNewWords();
    setIsBlurred(true);
  };

  const handleUnblurClick = () => {
    setCoins(coins + 20);
    setIsBlurred(false);
    setTimeout(() => {
      setIndex(index + 1);
      setIsBlurred(true);
    }, 5000); // 5 seconds
  };

  const getSigns = () => {
    const randomNumber = Math.floor(Math.random() * 2);
    let other = randomNumber == 1 ? 0 : 1;
  

    return (
      <React.Fragment>
        <div className="w-60 h-24 bg-wood bg-cover bg-center cursor-pointer flex items-center justify-center text-2xl font-bold transform hover:scale-110 transition-all text-white" onClick={randomNumber == 0 ? handleUnblurClick : handleBlurClick}>
      {words[randomNumber]}
    </div>
    <div className="w-60 h-24 bg-wood bg-cover bg-center cursor-pointer flex items-center justify-center text-2xl font-bold transform hover:scale-110 transition-all text-white" onClick={other == 0 ? handleUnblurClick : handleBlurClick}>
      {words[other]}
    </div>
      </React.Fragment>
    )
  }

  return (
    <div className="flex-grow h-screen flex flex-col items-center justify-center relative">
  <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-center ${isBlurred ? 'filter blur-md' : ''}`} style={{backgroundImage: `url(${images[index]})`}}></div>
  <div className="text-3xl font-bold">
    Play SpellSafari!
  </div>
  <div className="mt-8 flex gap-8 relative z-10">
    {
      isBlurred ?
      (
        <React.Fragment>
 {getSigns()}
        </React.Fragment>
       
      ) : null
    }
  </div>
</div>

  

  
  
  );
}

export default SpellSafari;
