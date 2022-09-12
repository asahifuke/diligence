import { Miteras } from './miteras.js';
import { By } from 'selenium-webdriver';

export class Retirement extends Miteras {
  constructor(username, password, feeling) {
    super(username, password, feeling)
  }

  async dragAndDrop() {
    const to = await this.driver.findElement(By.id('cico-clock-out-button'))
    await super.dragAndDrop(await to)
  }
}
