import { HackAnonPage } from './app.po';

describe('hack-anon App', () => {
  let page: HackAnonPage;

  beforeEach(() => {
    page = new HackAnonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
