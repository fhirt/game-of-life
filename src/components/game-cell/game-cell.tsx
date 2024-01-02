import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'game-cell',
  styleUrl: 'game-cell.css',
  shadow: true,
})
export class GameCell {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
