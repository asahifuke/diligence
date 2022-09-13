import { Builder, By, Key } from 'selenium-webdriver';

export class Miteras {
  #uri = 'https://kintai.miteras.jp/A319971/login'

  constructor(username, password, feeling) {
    this.username = username
    this.password = password
    this.driver   = new Builder().forBrowser('chrome').build();
    this.feeling  = feeling
  }

  async punchIn(){
    await this.#login()
    await this.dragAndDrop()
  }

  async dragAndDrop(droppable) {
    await this.driver.actions({async: true}).dragAndDrop(
      await this.driver.findElement(By.id(this.feeling)),
      await this.driver.findElement(By.id(droppable))
    ).perform()
  }

  async #login() {
    await this.driver.get(this.#uri);
    await this.driver.findElement(By.id('username')).sendKeys(this.username);
    await this.driver.findElement(By.id('password')).sendKeys(this.password, Key.RETURN);
  }
}
