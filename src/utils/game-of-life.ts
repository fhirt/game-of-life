export class GameOfLife {

  countPopulation(): number {
    let count = 0;
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i]) {
        count++;
      }
    }
    return count;
  }


  width: number = 10;
  height: number = 10;
  board: boolean[];
  constructor() {
    this.board = new Array(this.width * this.height).fill(false);
  }

  public getCell(x: number, y: number): boolean {
    return this.board[y * this.width + x];
  }

  public setCell(x: number, y: number, state: boolean): void {
    this.board[y * this.width + x] = state;
  }

  public toggleCell(x: number, y: number): void {
    this.setCell(x, y, !this.getCell(x, y));
  }

  public getNeighbors(x: number, y: number): number {
    let neighbors = 0;
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
      for (let yOffset = -1; yOffset <= 1; yOffset++) {
        if (this.getCell(x + xOffset, y + yOffset)) {
          neighbors++;
        }
      }
    }
    return neighbors;
  }

  public next(): void {
    let nextBoard = new Array(this.width * this.height).fill(false);
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const neighbors = this.getNeighbors(x, y);
        if (this.getCell(x, y)) {
          nextBoard[y * this.width + x] = neighbors === 2 || neighbors === 3;
        } else {
          nextBoard[y * this.width + x] = neighbors === 3;
        }
      }
    }
    this.board = nextBoard;
  }

  public clear(): void {
    this.board = new Array(this.width * this.height).fill(false);
  }

  public randomize(): void {
    this.board = this.board.map(() => Math.random() > 0.75);
  }

  public getBoard(): boolean[] {
    return this.board;
  }

  public getStringMatrixRepresentation(): string {
    let matrix = '';
    for (let y = 0; y < this.height; y++) {
      matrix += this.board.slice(y * this.width, (y + 1) * this.width).map((cell) => cell ? 'X' : 'O').join('') + '\n';
    }
    return matrix;
  }
}