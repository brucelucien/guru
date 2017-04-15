import { GuruAppPage } from './app.po';

describe('guru-app App', () => {
  let page: GuruAppPage;

  beforeEach(() => {
    page = new GuruAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('guru works!');
  });
});
