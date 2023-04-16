import { useGlobalContext } from "../context";


const Form = (props) => {
  const {setCurrentPage} = props;

  const { quiz, handleSubmit, handleChange, error } = useGlobalContext();
  
  return (
    <div className="justify-center flex items-center min-h-screen ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 md:p-8 max-w-[1000px] space-y-8 shadow rounded-lg w-11/12 "
      >
        <h2 className="text-3xl font-medium">ANSWER THESE QUESTIONS TO ENTER THE DRAGONS's DEN </h2>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium" htmlFor="amount">
          Rearrange the following letters to form a correct word: "rctcore"
          </label>
          <input
          type="text"
          id="amount"
          name="amount"
          className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
          value={quiz.amount.toString()}
          onChange={handleChange}
        />

        </div>
        {
          <div className="flex flex-col space-y-2">
             <label className="text-gray-600 font-medium" htmlFor="word">
           Identify the correct word from the list below while ignoring the background noise: "car", "far", "tar", "bar" 
          </label>
          <input
          type="text"
          id="word"
          name="word"
          className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
          value={quiz.word}
          onChange={handleChange}
        />
          </div>

        }
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium" htmlFor="category">
          Choose the correct word to replace the underlined word in the sentence: "I was feeling very hungry."
          </label>
          <select
            id="category"
            name="category"
            className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
            value={quiz.category}
            onChange={handleChange}
           
          >
            <option value="Tired">Tired</option>
            <option value="Hungry">Hungry</option>
            <option value="Happy">Happy</option>
            <option value="Angry">Angry</option>
          </select>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium" htmlFor="difficulty">
          Sit still and focus on the screen for 1 minute without moving or getting distracted. 
          </label>
          <select
            id="difficulty"
            name="difficulty"
            className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
            value={quiz.difficulty}
            onChange={handleChange}
           
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
  <label className="text-gray-600 font-medium" htmlFor="type">
    Arrange the following words in alphabetical order: "apple, dog, cat, banana" 
  </label>
  <div className="flex flex-col space-y-2">
    <input
      type="text"
      id="option1"
      name="option1"
      className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
      placeholder="Option 1"
      value={quiz.option1}
      onChange={handleChange}
    />
    <input
      type="text"
      id="option2"
      name="option2"
      className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
      placeholder="Option 2"
      value={quiz.option2}
      onChange={handleChange}
    />
    <input
      type="text"
      id="option3"
      name="option3"
      className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
      placeholder="Option 3"
      value={quiz.option3}
      onChange={handleChange}
    />
    <input
      type="text"
      id="option4"
      name="option4"
      className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
      placeholder="Option 4"
      value={quiz.option4}
      onChange={handleChange}
    />
  </div>
  
        {
          <div className="flex flex-col space-y-2">
             <label className="text-gray-600 font-medium" htmlFor="repeat">
            Read the following sentence and repeat it back: "The brown dog chased the green ball." 
          </label>
          <input
          type="text"
          id="repeat"
          name="repeat"
          className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
          value={quiz.repeat}
          onChange={handleChange}
        />
          </div>

        }

{
          <div className="flex flex-col space-y-2">
             <label className="text-gray-600 font-medium" htmlFor="voice">
             Read the following sentence out loud: "The quick brown fox jumps over the lazy dog."  
          </label>
          <input
          type="text"
          id="voice"
          name="voice"
          className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
          value={quiz.voice}
          onChange={handleChange}
        />
          </div>

        }

        {<div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium" htmlFor="difficulty">
          Choose whether you would benefit from extra help in school or extra time on tests: 
          </label>
          <select
            id="difficulty"
            name="difficulty"
            className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
            value={quiz.difficulty}
            onChange={handleChange}
           
          >
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
        }

{<div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium" htmlFor="difficulty">
          Memorize the following list of words and then recall as many words as you can in 1 minute: "house, tree, car, book, dog, cat, ball, flower"  
          </label>
          <select
            id="difficulty"
            name="difficulty"
            className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
            value={quiz.difficulty}
            onChange={handleChange}
           
          >
            <option value="yes">I was able to do it</option>
          </select>
        </div>
        } 
        {<div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium" htmlFor="difficulty">
          Rearrange the following set of numbers in ascending order: "5, 2, 8, 1, 7, 3, 6, 4" </label>
          <select
            id="category"
            name="category"
            className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
            value={quiz.category}
            onChange={handleChange}
           
          >
            <option value="1,2,4,5,3,6,7,8">1,2,4,5,3,6,7,8</option>
            <option value="8,7,6,5,4,3,2,1">8,7,6,5,4,3,2,1</option>
            <option value="1,2,3,4,5,6,7,8">1,2,3,4,5,6,7,8</option>
            <option value="1,3,5,7,6,4,2,8">1,3,5,7,6,4,2,8</option>
          </select>
        </div>
        } 
        
        {
          <div className="flex flex-col space-y-2">
             <label className="text-gray-600 font-medium" htmlFor="sounds">
          Identify the sound that is different from the others in the following set of words: "bat, mat, rat, hat, cat"
          </label>
          <input
          type="text"
          id="sounds"
          name="sounds"
          className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
          value={quiz.sounds}
          onChange={handleChange}
        />
          </div>

        }

{
          <div className="flex flex-col space-y-2">
             <label className="text-gray-600 font-medium" htmlFor="orient">
             Identify the correct orientation of the following letters: "b, d, p, q"
          </label>
          <input
          type="text"
          id="orient"
          name="orient"
          className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
          value={quiz.orient}
          onChange={handleChange}
        />
          </div>
        }

{
          <div className="flex flex-col space-y-2">
             <label className="text-gray-600 font-medium" htmlFor="reverse">
           Read the following words and identify if any of them are written in reverse order: "mirror, racecar, level, elephant" 
          </label>
          <input
          type="text"
          id="reverse"
          name="reverse"
          className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
          value={quiz.reverse}
          onChange={handleChange}
        />
          </div>
        }

{
          <div className="flex flex-col space-y-2">
             <label className="text-gray-600 font-medium" htmlFor="blend">
             Blend the following sounds together to form a word: /f/ + /l/ + /i/ + /p/ 
          </label>
          <input
          type="text"
          id="blend"
          name="blend"
          className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
          value={quiz.blend}
          onChange={handleChange}
        />
          </div>
        }

<div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium" htmlFor="difficulty">
          Complete the following sentence with the appropriate word: "She went to the grocery store to buy some ___."
          </label>
          <select
            id="difficulty"
            name="difficulty"
            className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
            value={quiz.difficulty}
            onChange={handleChange}
           
          >
            <option value="Milk">Milk</option>
            <option value="shoes">shoes</option>
            <option value="chair">chair</option>
          </select>
        </div>

        </div>

  {error && (
          <p className="text-red-600">
            Can't Generate Questions, Please Try Different Options
          </p>
        )}
        <button
          type="submit"
          className="bg-yellow-600 rounde-md w-full p-2 text-white hover:bg-yellow-500"
          onClick={() => setCurrentPage("Collectibles")}
        >
          Submit
        </button>
      </form>
    </div>
  );
};




export default Form;
