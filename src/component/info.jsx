import { useCallback, useContext } from "react";
import classes from "./Info.module.css";
import Timer from "./Timer";
import { playerTurn } from "./Context";

export default function Info(props) {
  const { turn: currentTurn, setTurn: setCurrentTurn } = useContext(playerTurn);

  const onSkip = useCallback(
    function onSkip() {
      setCurrentTurn((prev) => 1 - prev);
    },
    [setCurrentTurn]
  );

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Tic-Tac-Toe Game</h2>
      <p className={classes.round}>
        Player :
        <span>{currentTurn ? props.data.player2 : props.data.player1}</span>
      </p>
      {props.data.timer && (
        <Timer
          key={Math.floor(Math.random() * 10000)}
          className={classes.timer}
          timeOut={props.data.timer}
          onTimeOut={onSkip}
        />
      )}
    </div>
  );
}
