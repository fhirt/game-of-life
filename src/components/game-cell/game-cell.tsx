import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'game-cell',
  styleUrl: 'game-cell.css',
})
export class GameCell {

  @Prop() cellId: number;

  @State() alive: boolean = false;

  toggle() {
    this.alive = !this.alive;
  }

  render() {
    return (
      <Host class={this.alive ? 'alive' : 'dead'}></Host>
    );
  }

}
