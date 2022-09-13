import { Miteras } from './miteras.js'

export class GoingToWork extends Miteras {
  async dragAndDrop () {
    await super.dragAndDrop('cico-clock-in-button')
  }
}
