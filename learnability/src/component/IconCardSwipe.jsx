import React, { useState, useEffect } from 'react';
import { GiSpikedDragonHead, GiCrystalBall, GiSpiralBottle, GiMagicPalm } from 'react-icons/gi';
import { AiOutlineHeart, AiOutlineStar, AiOutlineCloud, AiOutlineCloudUpload, AiOutlineCloudDownload } from 'react-icons/ai';
import { FaRegSmile, FaRegFrown, FaRegGrinAlt, FaRegMeh, FaRegLaughSquint } from 'react-icons/fa';

const IconCard = (props) => {

  const {seen, setSeen, setDone, randomNumber, numRight} = props;

  const [count, setCount] = useState(3); // Initialize count to 3

  // Render icon or error message based on the random number
  if (randomNumber === 1) {
    return <GiSpikedDragonHead size="180" />;
  }
  if (randomNumber === 2){
    return <GiCrystalBall size="180" />;
  }
  if (randomNumber === 3){
    return <GiSpiralBottle size="180" />;
  }
  if (randomNumber === 4){
    return <GiMagicPalm size="180" />;
  }
  if (randomNumber === 5){
    return <AiOutlineHeart size="180" />;
  }
  if (randomNumber === 6){
    return <AiOutlineStar size="180" />;
  }
  if (randomNumber === 7){
    return <AiOutlineCloud size="180" />;
  }
  if (randomNumber === 8){
    return <AiOutlineCloudUpload size="180" />;
  }
  if (randomNumber === 9){
    return <AiOutlineCloudDownload size="180" />;
  }
  if (randomNumber === 10){
    return <FaRegSmile size="180" />;
  }
  else {
    return <p>error</p>;
  }
}

export default IconCard;
