import { AudioBookCollectionPage } from './app.po';

describe('audio-book-collection App', function() {
  let page: AudioBookCollectionPage;

  beforeEach(() => {
    page = new AudioBookCollectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
