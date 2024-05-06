import React, { useContext, useState } from "react";
import { questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Context";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); //setSelected option is set in the Radio button input

  const { setScore, setGameState } = useContext(QuizContext); //Receiving  the context values from  provider.

  // Increase the score if ans is correct and  move to the next question when next button is hit.
  const nextQuestion = () => {
    if (questions[currentQuestion].correct === selectedOption) {
      setScore((prevScore) => prevScore + 1); //This's same as setScore(score +1), always use the functional version for state updates,
      // By doing so, you ensure that you're always working with the most up-to-date state value,
      // It helps prevent issues with stale state updates, particularly when dealing with asynchronous operations like fetching data from an API.
    }
    setCurrentQuestion((prevQues) => prevQues + 1);
  };
  // increase the score if ans is correct and go back to home page when submit button is clicked.
  const submitQuiz = () => {
    if (questions[currentQuestion].correct === selectedOption) {
      setScore((prevScore) => prevScore + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div>
      {/* Render the question */}
      <h1> {questions[currentQuestion].question}</h1>
      {/* Render its options */}
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={index}
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
      {/* Next and Submit buttons */}
      {/* Change the button from next to submit at the last question */}
      {currentQuestion === questions.length - 1 ? (
        <button onClick={submitQuiz}>Submit</button>
      ) : (
        <button onClick={nextQuestion}>Next</button>
      )}
    </div>
  );
};

export default Quiz;
