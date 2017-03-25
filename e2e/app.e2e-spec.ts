import { JaptemPage } from './app.po';

describe('japtem App', function() {
  let page: JaptemPage;

  beforeEach(() => {
    page = new JaptemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
