import { useEffect, useState } from "react";

import classes from "./index.module.css";
import Info from "./component/info";
import Table from "./component/Table";
import Start from "./component/start";
import { playerTurn, grid } from "./component/Context";
import { Check, has_play } from "./component/Checker.js";

const initGrid = Array(3)
  .fill()
  .map(() => Array(3).fill(""));

function App() {
  const [turn, setTurn] = useState(null);
  const [board, setBoard] = useState(initGrid);
  const [startGame, setStartGame] = useState(0);
  const [winner, setWinner] = useState(null);
  const [dataPlayer, setDataPlayer] = useState({
    player1: "",
    player2: "",
    timer: null,
  });

  const StartPlay = () => {
    setStartGame(1);
  };

  const receiveData = (data) => {
    setBoard(() =>
      Array(3)
        .fill()
        .map(() => Array(3).fill(""))
    );
    setWinner(null);
    setDataPlayer(data);
    setStartGame(0);
    setTurn(0);
  };

  useEffect(() => {
    const has_winner = Check(board);
    if (has_winner) {
      const interval = setTimeout(() => {
        setWinner(
          `Game ended and winner is ${
            has_winner === 1 ? dataPlayer.player1 : dataPlayer.player2
          }`
        );
        setDataPlayer((prev) => ({
          ...prev,
          timer: null,
        }));
      }, 500);
      return () => {
        clearTimeout(interval);
      };
    }

    if (!has_play(board)) {
      const interval = setTimeout(() => {
        setWinner("Game ended in a draw.");
        setDataPlayer((prev) => ({
          ...prev,
          timer: null,
        }));
      }, 500);
      return () => {
        clearTimeout(interval);
      };
    }
  }, [board]);

  return (
    <>
      {startGame && <Start onSendData={receiveData} />}

      <playerTurn.Provider value={{ turn, setTurn }}>
        <div className={classes.parent}>
          <Info key={Math.floor(Math.random() * 100001)} data={dataPlayer} />
          <grid.Provider value={{ board, setBoard }}>
            {winner && <p className={classes.win}>{winner}</p>}
            {!winner && <Table />}
          </grid.Provider>
          <div className={classes.control}>
            <button className={classes.btn} onClick={StartPlay}>
              Start
            </button>
          </div>
        </div>
      </playerTurn.Provider>
    </>
  );
}

export default App;
