import { UnoGamePage } from './app.po';

describe('uno-game App', () => {
  let page: UnoGamePage;

  beforeEach(() => {
    page = new UnoGamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
