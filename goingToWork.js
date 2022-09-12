import { Miteras } from './miteras.js';
import { By } from 'selenium-webdriver';

export class GoingToWork extends Miteras {
  constructor(username, password, feeling) {
    super(username, password, feeling)
  }

  async dragAndDrop() {
    const to = await this.driver.findElement(By.id('cico-clock-in-button'))
    await super.dragAndDrop(await to)
  }
}
