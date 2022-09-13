import { Miteras } from './miteras.js';

export class Retirement extends Miteras {
  constructor(username, password, feeling) {
    super(username, password, feeling)
  }

  async dragAndDrop() {
    await super.dragAndDrop('cico-clock-out-button')
  }
}
