import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import CoinsDisplay from "./component/CoinsDisplay";
import SwipeSight from "./component/SwipeSight";
import Collectibles from "./component/Collectibles";
import Shop from "./component/Shop";

export default function App() {

  const [coins, setCoins] = React.useState(0);

  const [currentPage, setCurrentPage] = React.useState("Collectibles");

  const numCollectibles = 7;
  const [collectibles, setCollectibles] = React.useState([0, 3, 5]);

  // console.log(currentPage);

  return (
  <div className="flex">
      <Sidebar setCurrentPage={setCurrentPage} />

    {


  currentPage === "Collectibles" ? (
    // <Collectibles collectibles={collectibles} numCollectibles={numCollectibles} />
    <Shop />
  ) : currentPage === "SwipeSight" ? (
    <SwipeSight />
  ) : currentPage == "Shop" ? (
    <Shop />
  ) : null
}

   
     <CoinsDisplay coins={coins} />
  </div>
  
  );
}

function TailwindCSSButton(props){
  return(
    <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600">
      {props.children}
    </button>
  )
}