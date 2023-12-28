export function Check(grid) {
  for (let i = 0; i < 3; i++) {
    if (
      grid[i][0] === grid[i][1] &&
      grid[i][1] === grid[i][2] &&
      grid[i][0] !== ""
    ) {
      if (grid[i][0] === "X") return 1;
      else return 2;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      grid[0][i] === grid[1][i] &&
      grid[1][i] === grid[2][i] &&
      grid[0][i] !== ""
    ) {
      if (grid[0][i] === "X") return 1;
      else return 2;
    }
  }

  if (
    grid[0][0] === grid[1][1] &&
    grid[1][1] === grid[2][2] &&
    grid[0][0] !== ""
  )
    if (grid[0][0] === "X") return 1;
    else return 2;

  if (
    grid[0][2] === grid[1][1] &&
    grid[1][1] === grid[2][0] &&
    grid[0][2] !== ""
  )
    if (grid[0][2] === "X") return 1;
    else return 2;

  return 0;
}

export const has_play = (grid) => {
  let cnt = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "") cnt++;
    }
  }
  return cnt !== 0;
};
