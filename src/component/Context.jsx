import { createContext } from "react";

const initGrid = Array(3)
  .fill()
  .map(() => Array(3).fill(""));

export const grid = createContext(initGrid);
export const playerTurn = createContext(0);
