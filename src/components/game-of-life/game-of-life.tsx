import { Component, State, h } from '@stencil/core';
import { GameOfLife } from '../../utils/game-of-life';

@Component({
  tag: 'game-of-life',
  styleUrl: 'game-of-life.css',
})
export class GameOfLifeComponent {

  gameOfLife: GameOfLife = new GameOfLife();
  timer: any;
  @State()
  isTimerRunning: boolean = false;

  @State()
  board: boolean[] = this.gameOfLife.board;

  @State()
  generation: number = 0;

  @State()
  population: number = this.gameOfLife.countPopulation();

  lastBoard: boolean[] = [];
  @State()
  message: string;

  start(): void {
    this.isTimerRunning = true;
    this.message = '';
    this.timer = setInterval(() => {
      this.next();
    }, 500);
  }

  stop(): void {
    this.isTimerRunning = false;
    clearInterval(this.timer);
  }

  end(): void {
    this.stop();
    if (this.population === 0) {
      this.message = 'Extinction';
    } else {
      this.message = 'Stable ';
    }
  }

  randomize(): void {
    this.generation = 0;
    this.message = '';
    this.gameOfLife.randomize();
    this.population = this.gameOfLife.countPopulation();
    this.board = this.gameOfLife.board;
  }

  next(): void {
    this.gameOfLife.next();
    this.lastBoard = this.board;
    this.board = this.gameOfLife.board;
    if (this.lastBoard.toString() === this.board.toString()) {
      this.end();
    }
    this.generation++;
    this.population = this.gameOfLife.countPopulation();
  }

  render() {
    return (
      <div class="game-of-life">
        <h1>Game of Life</h1>
        <p>Generation: {this.generation}</p>
        <p>Population: {this.population}</p>
        <p>{this.message}</p>
        <div class="game-board">
          {this.board.map((cell, cellIndex) => (
            <game-cell
              key={cellIndex}
              cell-id={cellIndex}
              alive={cell}
            ></game-cell>
          ))}
        </div>
        <div class="controls">
          <button onClick={() => this.start()} disabled={this.isTimerRunning}>Start</button>
          <button onClick={() => this.stop()} disabled={!this.isTimerRunning}>Stop</button>
          <button onClick={() => this.randomize()} disabled={this.isTimerRunning}>Randomize</button>
          <button onClick={() => this.next()} disabled={this.isTimerRunning}>Next</button>
        </div>
      </div>
    );
  }

}
