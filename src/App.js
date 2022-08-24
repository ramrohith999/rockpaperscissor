import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [useraChoice, setUseraChoice] = useState("rock");
  const [userbChoice, setUserbChoice] = useState("rock");
  const [useraPoints, setUseraPoints] = useState(0);
  const [userbPoints, setUserbPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);
  const choices = ["rock", "paper", "scissors"];

  const handleaClick = (value) => {
    setUseraChoice(value);
  };
  const handlebClick = (value) => {
    setUserbChoice(value);
  };

  const reset = () => {
    window.location.reload();
  };

  useEffect(() => {
    const comboMoves = useraChoice + userbChoice;
    if (useraPoints <= 4 && userbPoints <= 4) {
      if (
        comboMoves === "scissorspaper" ||
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock"
      ) {
        // userPoints.current += 1
        const updatedUseraPoints = useraPoints + 1;
        setUseraPoints(updatedUseraPoints);
        setTurnResult("User A gets the point!");
        if (updatedUseraPoints === 5) {
          setResult("User A Wins");
          const gameOff = true;
          setGameOver(gameOff);
        }
      }

      if (
        comboMoves === "paperscissors" ||
        comboMoves === "scissorsrock" ||
        comboMoves === "rockpaper"
      ) {
        const updatedUserbPoints = userbPoints + 1;
        setUserbPoints(updatedUserbPoints);
        setTurnResult("User b gets the point!");
        if (updatedUserbPoints === 5) {
          setResult("User B Wins");
          const gameOff = true;
          setGameOver(gameOff);
        }
      }

      if (
        comboMoves === "paperpaper" ||
        comboMoves === "rockrock" ||
        comboMoves === "scissorsscissors"
      ) {
        setTurnResult("No one gets a point!");
      }
    }
  },[userbChoice, useraChoice]);

  return (
    <div className="App">
      <h1 className="heading">Rock-Paper-Scissors</h1>
      <div className="score">
        <h1>User A Points: {useraPoints}</h1>
        <h1>User B Points: {userbPoints}</h1>
      </div>

      <div className="choice">
        <div className="choice-user">
          <img
            className="user-hand"
            src={`../images/${useraChoice}.png`}
            alt=""
          ></img>
        </div>
        <div className="choice-computer">
          <img
            className="computer-hand"
            src={`../images/${userbChoice}.png`}
            alt=""
          ></img>
        </div>
      </div>
<br /> <br />
<div className="btns">
      <div className="button-div">
        {choices.map((choice, index) => (
          <button
            className="button"
            key={index}
            onClick={() => handleaClick(choice)}
            disabled={gameOver}
          >
            {choice}
          </button>
        ))}
      </div>
      <br />
      <div className="button-div">
        {choices.map((choice, index) => (
          <button
            className="button"
            key={index}
            onClick={() => handlebClick(choice)}
            disabled={gameOver}
          >
            {choice}
          </button>
        ))}
      </div>
      </div>

      <div className="result">
        <h1>Turn Result: {turnResult}</h1>
        <h1>Final Result: {result}</h1>
      </div>

      <div className="button-div">
        {gameOver && (
          <button className="button" onClick={() => reset()}>
            Restart Game?
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
