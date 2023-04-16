import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import CoinsDisplay from "./component/CoinsDisplay";
import SwipeSight from "./component/SwipeSight";
import Collectibles from "./component/Collectibles";
import WordWhiz from "./component/WordWhiz";
import Shop from "./component/Shop";
import SpellSafari from "./component/SpellSafari";
import FormApp from "./component/FormApp";
import AppProvider from "./context";

export default function App() {

  const [coins, setCoins] = React.useState(0);

  const [currentPage, setCurrentPage] = React.useState("Form");

  const numCollectibles = 12
  const [collectibles, setCollectibles] = React.useState([]);

  const [words, setWords] = React.useState(
    [
//       "history",
// "notice",
// "often",
// "opposite",
// "possible",
// "potatoes",
// "reign",
// "remember",
// "strange",
// "strength",
    ]
  )

  // console.log(currentPage);

  if(currentPage == "Form"){
    return(
      <AppProvider>
        <FormApp setCurrentPage={setCurrentPage} />
      </AppProvider>
    )
  }
  else{
    return (
  <div className="flex">
      <Sidebar setCurrentPage={setCurrentPage} />

    {
  currentPage === "Collectibles" ? (
    <Collectibles collectibles={collectibles} numCollectibles={numCollectibles} />
  ) : currentPage === "SwipeSight" ? (
    <SwipeSight setCoins={setCoins} coins={coins} />
  ) : (
    currentPage === "WordWhiz" ? (
      <WordWhiz words={words} setWords={setWords} coins={coins} setCoins={setCoins} />
    ) : (
      currentPage === "Shop" ? (
        <Shop coins={coins} setCoins={setCoins} collectibles={collectibles} setCollectibles={setCollectibles} />
      ) : (
        currentPage === "SpellSafari" ? (
          <SpellSafari coins={coins} setCoins={setCoins} />
        ) : null
      )
    )
  )
}

     <CoinsDisplay coins={coins} setCurrentPage={setCurrentPage} />
  </div>
  
  );
  }
}

