import { AdtagTemplateToolPage } from './app.po';

describe('adtag-template-tool App', function() {
  let page: AdtagTemplateToolPage;

  beforeEach(() => {
    page = new AdtagTemplateToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
