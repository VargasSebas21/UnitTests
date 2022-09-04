import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.id('title')).getText() as Promise<string>;
  }

  clickButton(id: string) {
    element(by.id(id)).click();
  }

  async clickRandomImage() {
    const images = element.all(by.css('img'));
    const numberOfImages = await images.count();
    console.log(numberOfImages)
    const imageSelected = Math.floor(Math.random() * (numberOfImages - 0 + 1) + 0)
    images.last().click();
    return await images.last().getAttribute('href');
  }

  getImagesNames(): Promise<string[]> {
    return new Promise<string[]>(async (resolve, reject) => {
      const names = await element.all(by.css('img')).map<string>(async (img) => await img.getAttribute('src'));
      resolve(names);
    })
  }
}
