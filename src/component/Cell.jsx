import { useContext } from "react";
import classes from "./Table.module.css";
import { playerTurn, grid } from "./Context";
export function Cell(props) {
  const { board, setBoard } = useContext(grid);
  const { turn: currentTurn, setTurn: setCurrentTurn } = useContext(playerTurn);
  let idx = props.id - 1;
  let row = ~~(idx / 3);
  let col = idx % 3;
  const cell = board[row][col];

  const change = () => {
    if (currentTurn === null || cell !== "") return;

    if (currentTurn === 1) {
      setBoard((prev) => {
        prev[row][col] = "O";
        return [...prev];
      });
    } else if (currentTurn === 0) {
      setBoard((prev) => {
        prev[row][col] = "X";
        return [...prev];
      });
    }
    setCurrentTurn((prev) => 1 - prev);
  };
  return (
    <button onClick={change} className={classes.cell}>
      {cell}
    </button>
  );
}
