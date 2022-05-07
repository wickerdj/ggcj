import { css,  html, LitElement } from 'lit';
import { GetJoke } from "../wailsjs/go/main/App";


export class JokeElement extends LitElement {
  static get styles() {
    return css `
    .btn {
      margin: 1.5rem;
    }
    
    .result {
      height: 20px;
      line-height: 20px;
      margin: 1.5rem;

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
        <button @click=${this.getJoke} class="btn">Tell me a joke</button>
        <div class="result" id="result">${this.resultText}</div>
        
      </main>
  ` 
  }
}

window.customElements.define('joke-element', JokeElement)