import { Andrewangular2017Page } from './app.po';

describe('andrewangular2017 App', function() {
  let page: Andrewangular2017Page;

  beforeEach(() => {
    page = new Andrewangular2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
