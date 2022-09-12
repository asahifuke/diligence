import { Miteras } from './miteras.js';
import { By } from 'selenium-webdriver';

export class Retirement extends Miteras {
  #To = this.driver.findElement(By.id('cico-clock-out-button'))

  constructor(username, password, feeling) {
    super(username, password, feeling)
  }

  dragAndDrop() {
    super.dragAndDrop(this.#To)
  }
}
