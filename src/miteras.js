import { Builder, By, Key } from 'selenium-webdriver'
import fetch from 'node-fetch'

export class Miteras {
  #uri = 'https://kintai.miteras.jp/A319971/login'
  #method = 'POST'

  constructor (username, password, feeling) {
    this.username = username
    this.password = password
    this.feeling = feeling
    this.driver = new Builder().forBrowser('chrome').build()
  }

  async punchIn () {
    await this.#login()
    await this.sendRequest()
  }

  async sendRequest (uri) {
    fetch(uri, {
      method: this.#method,
      headers: this.#getHeaders(),
      body: this.#getBody()
    })
  }

  async #login () {
    await this.driver.get(this.#uri)
    await this.driver.findElement(By.id('username')).sendKeys(this.username)
    await this.driver.findElement(By.id('password')).sendKeys(this.password, Key.RETURN)
  }

  async #getWorkDateString () {
    return new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
  }

  async #getUpdatedDateString () {
    return await this.#getWorkDateString() + ' ' + await new Date().getHours() + ':' + await new Date().getMinutes() + ':' + await new Date().getSeconds() + '.' + await new Date().getMilliseconds()
  }

  async #getCookie () {
    return (await this.driver.manage().getCookies()).map(cookie => `${cookie.name}=${cookie.value};`).join(' ')
  }

  async #getHeaders () {
    return {
      Accept: '*/*',
      'Accept-Language': 'ja,en-US;q=0.9,en;q=0.8',
      Connection: 'keep-alive',
      'Content-Type': 'application/json',
      Cookie: await this.#getCookie(),
      Origin: 'https://kintai.miteras.jp',
      Referer: 'https://kintai.miteras.jp/A319971/cico',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      'X-CSRF-TOKEN': await this.driver.findElement(By.xpath('/html/head/meta[3]')).getAttribute('content'),
      'X-Requested-With': 'XMLHttpRequest',
      'client-timezone-offset': '-540',
      'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"'
    }
  }

  async #getBody () {
    return JSON.stringify({
      clockOutCondition: {
        condition: this.feeling
      },
      dailyPlaceEvidence: {},
      workDateString: this.#getWorkDateString(),
      stampBreakStart: '',
      stampBreakEnd: '',
      arriveAtWorkId: null,
      updatedDateString: this.#getUpdatedDateString()
    })
  }
}
