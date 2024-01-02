import { newSpecPage } from '@stencil/core/testing';
import { GameOfLifeComponent } from '../game-of-life';

describe('game-of-life', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GameOfLifeComponent],
      html: `<game-of-life></game-of-life>`,
    });
    expect(page.root).toEqualHtml(`
      <game-of-life>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </game-of-life>
    `);
  });
});
