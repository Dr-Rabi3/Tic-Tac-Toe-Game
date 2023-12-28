import classes from "./start.module.css";
export default function Start(props) {
  const sendData = (event) => {
    event.preventDefault();
    const data = {
      player1: event.target[0].value,
      player2: event.target[1].value,
      timer: event.target[2].value,
    };
    props.onSendData(data);
  };

  return (
    <>
      <form className={classes.parent} onSubmit={sendData}>
        <div className={classes["player-x"]}>
          <label htmlFor="x">Player X :</label>
          <input type="text" id="x" required />
        </div>
        <div className={classes["player-o"]}>
          <label htmlFor="y">Player O :</label>
          <input type="text" id="y" required />
        </div>
        <div className={classes.timer}>
          <label htmlFor="timer">Time Game (S) :</label>
          <input type="number" id="timer" max={60} min={10} />
        </div>
        <button>Go</button>
      </form>
    </>
  );
}
