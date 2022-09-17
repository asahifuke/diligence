import { Miteras } from './miteras.js'

export class Retirement extends Miteras {
  async sendRequest () {
    super.sendRequest('https://kintai.miteras.jp/A319971/submitClockOut')
  }
}
