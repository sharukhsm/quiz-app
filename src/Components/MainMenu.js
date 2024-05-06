import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";

const MainMenu = () => {
  //receiving the context data using useContext hook.
  const { setGameState } = useContext(QuizContext);
  return (
    <div>
      <h1>Main Menu</h1>
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start game
      </button>
    </div>
  );
};

export default MainMenu;
