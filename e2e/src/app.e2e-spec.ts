import { PrimePage } from './app.po';

xdescribe('PRIME App', () => {
  let page: PrimePage;

  beforeEach(() => {
    page = new PrimePage();
  });

  it('should display Prime in banner', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual(newFunction());
  });
});
function newFunction(): any {
  return 'Prime';
}

