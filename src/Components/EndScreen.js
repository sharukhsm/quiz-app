import React, { useContext } from "react";
import { questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Context";

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  //Reset the score when the user restarts the quiz and set the gameState to Quiz page
  const handleRestart = () => {
    setScore(0);
    setGameState("quiz");
  };
  return (
    <div>
      <h2>
        {/* Display the final score and the total number of questions */}
        Your Score is: {score} / {questions.length}
      </h2>

      <div>
        <button onClick={handleRestart}>Restart quiz</button>
      </div>
    </div>
  );
};

export default EndScreen;
