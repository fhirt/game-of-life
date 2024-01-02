import { newSpecPage } from '@stencil/core/testing';
import { GameCell } from '../game-cell';

describe('game-cell', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GameCell],
      html: `<game-cell></game-cell>`,
    });
    expect(page.root).toEqualHtml(`
      <game-cell>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </game-cell>
    `);
  });
});
