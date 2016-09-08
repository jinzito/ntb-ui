import { NodeBotUi3Page } from './app.po';

describe('node-bot-ui3 App', function() {
  let page: NodeBotUi3Page;

  beforeEach(() => {
    page = new NodeBotUi3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
