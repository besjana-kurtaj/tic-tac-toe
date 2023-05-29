import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";


const Square = (props) => {
  // const [value, setValue]=useState(null);
  return <button onClick={()=>{props.onClickEvent}} className="square">{props.value}</button>;
};
const Board = () => {
  const initialSquare=Array(9).fill(null);
  const [squares,setSquares]=useState(initialSquare);
  const [xIsNext, setxIsNext] =useState(true);
  const handeClickSquare=(i)=>{
    const newSquares=[...squares];
    newSquares[i]=xIsNext?'X':'O';
    setSquares(newSquares);
    setxIsNext(!xIsNext);
  }
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClickEvent={()=>handeClickSquare(i)}/>;
  };
  return (
    <div style={{ backgroundColor: "skyblue", margin: 10, padding: 20 }}>
      Board
      <div className="board-row">
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}{" "}
      </div>
      <div className="board-row">
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}{" "}
      </div>
      <div className="board-row">
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}{" "}
      </div>
    </div>
  );
};
const Game = () => {
  return (
    <div className="game">
      Game
      <Board />
    </div>
  );
};
ReactDOM.render(<Game />, document.getElementById("root"));
