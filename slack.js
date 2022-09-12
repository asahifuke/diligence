import fetch from "node-fetch"

export class Slack {
  #method      = 'POST'
  #contentType = 'application/json'

  constructor(uri, message) {
    this.uri     = uri
    this.message = message
  }

  send(){
    fetch(this.uri, {
        method: this.#method,
        headers: {
            'Content-type': this.#contentType
        },
        body: JSON.stringify({
            'text': this.message
        })
    });
  }
}
