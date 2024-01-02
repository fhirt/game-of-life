import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'game-of-life',
  styleUrl: 'game-of-life.css',
  shadow: true,
})
export class GameOfLife {

  render() {
    return (
      <Host>
        <div class="gameboard">
          <div class="gameboard__row">
            <div class="gameboard__cell"></div>
            <div class="gameboard__cell"></div>
            <div class="gameboard__cell"></div>
          </div>
          <div class="gameboard__row">
            <div class="gameboard__cell"></div>
            <div class="gameboard__cell"></div>
            <div class="gameboard__cell"></div>
          </div>
          <div class="gameboard__row">
            <div class="gameboard__cell"></div>
            <div class="gameboard__cell"></div>
            <div class="gameboard__cell"></div>
          </div>
        </div>
        <div class="controls">
          <button class="controls__button">Start</button>
          <button class="controls__button">Stop</button>
          <button class="controls__button">Reset</button>
        </div>
      </Host>
    );
  }

}
