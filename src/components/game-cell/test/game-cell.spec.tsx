import { newSpecPage } from '@stencil/core/testing';
import { GameCell } from '../game-cell';

describe('game-cell', () => {
  it('should toggle state', async () => {
    const page = await newSpecPage({
      components: [GameCell],
      html: `<game-cell></game-cell>`,
    });
    expect(page.rootInstance.alive).toBe(false);
    page.rootInstance.toggle();
    expect(page.rootInstance.alive).toBe(true);
  });

  it('should render alive', async () => {
    const page = await newSpecPage({
      components: [GameCell],
      html: `<game-cell></game-cell>`,
    });
    page.rootInstance.alive = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <game-cell class="alive">
      </game-cell>
    `);
  });

  it('should have a cell-id', async () => {
    const page = await newSpecPage({
      components: [GameCell],
      html: `<game-cell cell-id="3"></game-cell>`,
    });
    expect(page.rootInstance.cellId).toBe(3);
  });
});
