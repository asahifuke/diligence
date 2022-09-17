import { Miteras } from './miteras.js'

export class GoingToWork extends Miteras {
  async sendRequest () {
    super.sendRequest('https://kintai.miteras.jp/A319971/submitClockIn')
  }
}
