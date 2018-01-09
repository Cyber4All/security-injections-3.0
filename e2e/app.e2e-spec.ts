import { DemoModulePage } from './app.po';

describe('demo-module App', () => {
  let page: DemoModulePage;

  beforeEach(() => {
    page = new DemoModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
