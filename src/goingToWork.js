import { Miteras } from './miteras.js'

export class GoingToWork extends Miteras {
  // async moveToElement () {
  //   await super.moveToElement('cico-clock-in-button')
  // }

  async dragAndDrop () {
    await super.dragAndDrop('cico-clock-in-button')
  }
}
