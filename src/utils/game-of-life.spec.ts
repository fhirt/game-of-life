import { GameOfLife } from './game-of-life';

let gameOfLife = new GameOfLife();

describe('service', () => {
  it('should set up a new game board', () => {
    expect(gameOfLife.board.length).toEqual(100);
  });

  it('should set up a new game board with all cells dead', () => {
    expect(gameOfLife.board).toEqual(new Array(100).fill(false));
  });
});
