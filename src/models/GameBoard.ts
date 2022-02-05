export type GameColor = 'yellow' | 'red' | 'green' | 'blue' | 'gray';

export type GameGrid = Array<GameColor[]>;

export default class GameBoard {
  grid: GameGrid;

  rows: number;

  cols: number;

  constructor(row: number, col: number) {
    this.grid = this.generateGameGrid(row, col);
    this.rows = row;
    this.cols = col;
  }

  generateGameGrid(row: number, col: number): GameGrid {
    const grid: GameGrid = Array.from(Array(row), () => new Array(col));

    for (let i = 0; i < row; i += 1) {
      for (let j = 0; j < col; j += 1) {
        grid[i][j] = this.getRandomColor();
      }
    }

    return grid;
  }

  // eslint-disable-next-line class-methods-use-this
  getRandomColor(): GameColor {
    const colors: GameColor[] = ['blue', 'green', 'red', 'yellow'];

    return colors[Math.floor(Math.random() * 3)];
  }

  checkGameBoard(row: number, col: number): GameGrid {
    const color = this.grid[row][col];

    if (row !== 0 && color === this.grid[row - 1][col]) {
      this.grid[row][col] = 'gray';
      this.grid[row - 1][col] = 'gray';
    }

    if (row !== this.rows && color === this.grid[row + 1][col]) {
      this.grid[row][col] = 'gray';
      this.grid[row + 1][col] = 'gray';
    }

    if (col !== 0 && color === this.grid[row][col - 1]) {
      this.grid[row][col - 1] = 'gray';
      this.grid[row][col] = 'gray';
    }

    if (col !== this.cols && color === this.grid[row][col + 1]) {
      this.grid[row][col] = 'gray';
      this.grid[row][col + 1] = 'gray';
    }
    this.bubbleGrays();
    return this.grid;
  }

  bubbleGrays(): void {
    this.grid.forEach((elm) => {
      console.log(elm);
    });
  }
}
