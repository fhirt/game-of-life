import { newE2EPage } from '@stencil/core/testing';

describe('game-cell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<game-cell></game-cell>');

    const element = await page.find('game-cell');
    expect(element).toHaveClass('hydrated');
  });
});
