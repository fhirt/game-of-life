import { Component, Host, h } from '@stencil/core';
import { GameOfLife } from '../../utils/game-of-life';

@Component({
  tag: 'game-of-life',
  styleUrl: 'game-of-life.css',
})
export class GameOfLifeComponent {

  gameOfLife: GameOfLife = new GameOfLife();

  render() {
    console.log(this.gameOfLife.getStringMatrixRepresentation());
    return (
      <Host>
        <div class="game-board">
          {this.gameOfLife.board.map((cell, cellIndex) => (
            <game-cell
              key={cellIndex}
              cell-id={cellIndex}
              alive={cell}
            ></game-cell>
          ))}
        </div>
      </Host>
    );
  }

}
