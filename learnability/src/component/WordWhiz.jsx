import React, { Component, useEffect, useState } from 'react';
import { FaCoins } from 'react-icons/fa';


const WordWhiz = (props) => {
    const {words, setWords, coins, setCoins} = props;

    const [start, setStart] = useState(false);
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState([
        "accommodation",
        "entrepreneur",
        "exacerbate",
        "synchronize",
        "pterodactyl",
        "flour",
        "phlegm",
        "knight",
        "gnome"]);
    const [answering, setAnswering] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [numRight, setNumRight] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

    const handleStart = () => {
        setStart(true);
        gameStarted();
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          // Code to be executed when the "return" or "enter" key is pressed
          if(inputValue.trim() == words[index - 1].trim()){
            setNumRight(numRight + 1);
          }

          let tempAnswers = answers;
          answers.push(inputValue.trim());
          setAnswers(tempAnswers)

          console.log(answers);
          setAnswering(false);
          
          setInputValue("");
          // Add your logic here
        }
      };

    const getResultCoins = () => {
        let coinsWon = numRight * 10;

       return(
        <div className="flex justify-center items-center h-full">
    

        <div className="bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 rounded-lg shadow-2xl p-8">
    <div className="flex flex-col items-center">
      <div className="text-4xl text-white mb-4">
        {coinsWon > 0 ? 'Congratulations!' : 'Better Luck Next Time!'}
      </div>
      <div className="text-6xl text-white mb-8">
        {coinsWon > 0 ? (
          <>
            {coinsWon} <FaCoins className="inline" /> Won!
          </>
        ) : (
          <>
            {coinsWon} <FaCoins className="inline" /> None Won!
          </>
        )}
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-white text-purple-900 px-4 py-2 rounded-md font-bold text-lg transition duration-300 ease-in-out hover:bg-purple-800 hover:text-white"
          onClick={() => {
            handleStart();
            setStart(false);
            setIndex(0);
            setAnswering(false);
            setInputValue('');
            setNumRight(0);
          }}
        >
          Play Again
        </button>
        <button
          className="bg-white text-purple-900 px-4 py-2 rounded-md font-bold text-lg transition duration-300 ease-in-out hover:bg-purple-800 hover:text-white"
          onClick={() => {
            setCoins(coins + coinsWon);
            setStart(false);
            setIndex(0);
            setAnswers([]);
            setAnswering(false);
            setInputValue('');
            setNumRight(0);
          }}
        >
          Claim Coins
        </button>
      </div>
    </div>
  </div>
     
</div>
       )
    }

    const gameStarted = () => {
        let wordsTemp;

        if(words.length == 0){
            wordsTemp = [ "accommodation",
            "entrepreneur",
            "exacerbate",
            "synchronize",
            "pterodactyl",
            "flour",
            "phlegm",
            "knight",
            "gnome"]
        }
        else{
            wordsTemp = words;
        }

        console.log(answers);
        console.log(wordsTemp);

        let correct = [];

        wordsTemp.forEach((element, index) => {
            if(element == answers[index]){
                correct[index] = 1;
            }
            else{
                correct[index] = 0;
            }
          });

        console.log(correct)

        fetch('https://5320-8-28-178-59.ngrok-free.app', {
          method: 'post',
          body: JSON.stringify({  // Convert the payload to a JSON string
            "words": wordsTemp,
            "user_answers": answers,
            "correct": [
              1,
              1,
              1,
              1,
              1,
              0,
              1,
              1,
              1
            ]
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(response =>{
            setWords((JSON.parse(response).words).slice(0, 10));
            setAnswers([]);
;        })
        .catch(error => console.error(error));
      }

      useEffect(() => {
        const timer = setTimeout(() => {
            console.log("hi");
          if (index < words.length && start && !answering) {
            console.log(answering)
            setIndex(index + 1);
            setAnswering(true);
          }
        }, 1000);
    
        // Clean up the timer when the component unmounts or count reaches 0
        return () => clearTimeout(timer);
      }, [index, words, start, answering]);


      
      

    return ( 
        <div className="flex-grow h-screen flex flex-col items-center justify-center mt-7">
              {
        start ?
        (
            <div>
          {
            index == words.length && words.length != 0 ? (
                <div>{getResultCoins()}</div>
            ) : (
                <div className="text-3xl font-bold">Type the correct spelling
      </div>
            )
          }
          </div>
        )
        :
        (
          <div className="text-3xl font-bold">
            Play WordWhiz!
          </div>
        )
      }
      <div className="text-5xl font-bold mt-5"></div>
      {
        start && words.length != 0 ?
        (
          <div>
            {!answering ? (<div className="text-5xl">
          {words[index]}
          </div>) : (<div>
  {/* <h1 className="text-2xl font-bold mb-2">Your Answer</h1> */}
  <input
    type="text"
    className="w-full px-4 py-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-3xl" // Updated text size to 'text-3xl' for larger text size
    placeholder="Type something..."
    value={inputValue}
    onChange={handleInputChange}
    onKeyDown={handleKeyDown}

  />
  <p className="mt-2">You typed: {inputValue}</p>
</div>)}
          </div>
        ) : <button onClick={() => handleStart()} className="bg-primary text-white font-medium px-3 py-2 rounded hover:bg-gray-500 transition text-3xl">
          Start
      </button>
      }
        </div>
     );
}
 
export default WordWhiz;