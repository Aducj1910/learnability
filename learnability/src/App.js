import React from "react";
import Sidebar from "./component/Sidebar";
import CoinsDisplay from "./component/CoinsDisplay";
import SwipeSight from "./component/SwipeSight";

export default function App() {

  const [coins, setCoins] = React.useState(0);

  const [currentPage, setCurrentPage] = React.useState("SwipeSight");

  return (
  <div className="flex">
    <Sidebar />
    <SwipeSight /> 
    {/* Swap out for testing different game modes */}
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