import React from 'react';
import { GiSpikedDragonHead, GiCrystalBall } from 'react-icons/gi';

const IconCard = () => {
  // Generate a random number from 1 to 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // Render icon or error message based on the random number
  if (randomNumber === 1) {
    return <GiSpikedDragonHead size="28" />;
  }
  if (randomNumber === 2){
    return <GiCrystalBall size="28" />
  }
  else {
    return <p>error</p>;
  }
}

export default IconCard;

