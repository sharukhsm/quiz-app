import { useState } from "react";
import "./App.css";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";

import { QuizContext } from "./Helpers/Context.js";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz app</h1>
      {/* We need to make the game state accessible to all the components, we can use Context api to provide the state variables. */}
      {/* These variables are called global in context api */}
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        <h2> {gameState === "menu" && <MainMenu />}</h2>
        <h2> {gameState === "quiz" && <Quiz />}</h2>
        <h2> {gameState === "endScreen" && <EndScreen />}</h2>
      </QuizContext.Provider>
    </div>
  );
}

export default App;
