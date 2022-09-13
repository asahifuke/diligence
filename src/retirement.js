import { Miteras } from './miteras.js'

export class Retirement extends Miteras {
  async dragAndDrop () {
    await super.dragAndDrop('cico-clock-out-button')
  }
}
