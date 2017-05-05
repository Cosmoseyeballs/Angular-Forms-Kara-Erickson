import { AngularFormsKaraEricksonPage } from './app.po';

describe('angular-forms-kara-erickson App', () => {
  let page: AngularFormsKaraEricksonPage;

  beforeEach(() => {
    page = new AngularFormsKaraEricksonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
