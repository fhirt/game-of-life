import { newSpecPage } from '@stencil/core/testing';
import { GameOfLifeComponent } from '../game-of-life';

describe('game-of-life', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GameOfLifeComponent],
      html: `<game-of-life></game-of-life>`,
    });
    expect(page.root).toBeTruthy();
  });
});
