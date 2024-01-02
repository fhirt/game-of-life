import { newE2EPage } from '@stencil/core/testing';

describe('game-of-life', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<game-of-life></game-of-life>');

    const element = await page.find('game-of-life');
    expect(element).toHaveClass('hydrated');
  });
});
