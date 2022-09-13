import { Miteras } from './miteras.js';

export class GoingToWork extends Miteras {
  constructor(username, password, feeling) {
    super(username, password, feeling)
  }

  async dragAndDrop() {
    await super.dragAndDrop('cico-clock-in-button')
  }
}
