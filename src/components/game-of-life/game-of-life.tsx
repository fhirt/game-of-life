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
        <slot></slot>
      </Host>
    );
  }

}
