import { css,  html, LitElement } from 'lit';
import { GetJoke } from "../wailsjs/go/main/App";


export class JokeElement extends LitElement {
  static get styles() {
    return css `
    .result {
      height: 20px;
      line-height: 20px;
      margin: 1.5rem auto;

    }
    `
  }
  
  constructor() {
    super()
    console.log("ctor")
    this.resultText = this.getJoke()
  }
  
  static get properties() {
    return {
      resultText: {type: String},
    }
  }

  getJoke() {
    GetJoke().then( result => {
      console.log("result: " + result)
      this.resultText = result
    });
  }


  render() {
    return html`
      <main>
        <div class="result" id="result">${this.resultText}</div>
        <button @click=${this.getJoke} class="btn">Tell me a joke</button>
      </main>
  ` 
  }
}

window.customElements.define('joke-element', JokeElement)