import { Miteras } from './miteras.js';

export class Retirement extends Miteras {
  #To = this.driver.findElement(By.id('usercico-clock-in-buttonname'))

  constructor(username, password, feeling) {
    super(username, password, feeling)
  }

  dragAndDrop() {
    super.dragAndDrop(this.#To)
  }
}
