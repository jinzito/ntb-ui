import { NodeBotUi2Page } from './app.po';

describe('node-bot-ui2 App', function() {
  let page: NodeBotUi2Page;

  beforeEach(() => {
    page = new NodeBotUi2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
