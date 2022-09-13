import { GoingToWork } from './goingToWork.js'
import { Retirement } from './retirement.js'
import { Slack } from './slack.js'
import { program } from 'commander'

export class Diligence {
  constructor (options, username, password, feeling, slackUri, message) {
    this.options = options
    this.username = username
    this.password = password
    this.feeling = feeling
    this.slackUri = slackUri
    this.message = message
  }

  static start () {
    this.#parse()
    this.#createSelf().#goToOfficeOrWithdraw()
  }

  static #parse () {
    program
      .option('-o, --goToOffice')
      .option('-r, --retirement')
      .parse(process.argv)
  }

  static #createSelf () {
    return new Diligence(
      process.argv[2],
      process.argv[3],
      process.argv[4],
      process.argv[5],
      process.argv[6],
      process.argv[7]
    )
  }

  #goToOfficeOrWithdraw () {
    this.#createMiteras().punchIn()
    this.#createSlack().send()
  }

  #createMiteras () {
    return this.#isGoingToWork() ? this.#createGoingToWork() : this.#createRetirement()
  }

  #isGoingToWork () {
    return this.options.indexOf('o') !== -1
  }

  #createGoingToWork () {
    return new GoingToWork(
      this.username,
      this.password,
      this.feeling
    )
  }

  #createRetirement () {
    return new Retirement(
      this.username,
      this.password,
      this.feeling
    )
  }

  #createSlack () {
    return new Slack(
      this.slackUri,
      this.message
    )
  }
}

Diligence.start()
