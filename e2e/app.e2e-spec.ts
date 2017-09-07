import { BaseApp2Page } from './app.po';

describe('PRIME e2e tests', () => {
  let page: BaseApp2Page;

  beforeEach(() => {
    page = new BaseApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Professional Information');
  });
});
