import { AppPage } from './app.po';
import { browser, logging, protractor } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Pet Book Prueba Devops');
  });

  it('should display dogs when dogs button is clicked', async () => {
    page.clickButton('perroButton');
    const sources = await page.getImagesNames();
    const namesApply  = sources.map(source => source.toLowerCase().includes('perro'));
    let test = true;
    namesApply.forEach(name => {
      test = test && name;
    });

    expect(test).toBe(true);
  });

  it('should display cats when cat button is clicked', async () => {
    page.clickButton('catButton');
    const sources = await page.getImagesNames();
    const namesApply  = sources.map(source => source.toLowerCase().includes('gato'));
    let test = true;
    namesApply.forEach(name => {
      test = test && name;
    });

    expect(test).toBe(true);
  });

  it('should display cats and dogs when all button is clicked', async () => {
    page.clickButton('allButton');
    const sources = await page.getImagesNames();
    const namesApply  = sources.map(source => (/perro|gato/i).test(source));
    let test = true;
    namesApply.forEach(name => {
      test = test && name;
    });

    expect(test).toBe(true);
  });

  it('should display cats and dogs when all button is clicked', async () => {
    page.clickButton('allButton');
    const sources = await page.getImagesNames();
    const namesApply  = sources.map(source => (/perro|gato/i).test(source));
    let test = true;
    namesApply.forEach(name => {
      test = test && name;
    });

    expect(test).toBe(true);
  });

  it('should open the image that is randomly clicked', async () => {
    const image = await page.clickRandomImage();
    var EC = protractor.ExpectedConditions;
    // Waits for the URL to contain 'foo'.
    browser.wait(EC.urlContains(image), 5000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
