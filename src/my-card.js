import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js"; 


/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }
  constructor() {
    super();
    this.title = "Trip To The Moon";
    this.image = "https://www.zdnet.com/a/img/resize/392309990fc0ab367d3fe694c534b501aed94ad7/2022/10/31/633bd02e-8dc3-4a36-8017-45be94865d02/gettyimages-1426691421.jpg?auto=webp&width=1280";
    this.link = "https://hax.psu.edu/";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([fancy]) .card{
        background-color: blue;
        color: white;
      }

      .card.toggle {
        background-color: red;
        color: blue;
      }

      .card {
  width: 350px;
  border-radius: 5px;
  margin: 40px auto;
  box-shadow: 2px 2px 10px black;
  text-align: center;
  padding: 16px;
  background-color: white;
}



.image {
  width: 100%;
}

img {
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  margin: 0 auto;
}

.title {
  font-size: 24px;
  margin-top: 16px;
}

.des {
  font-size: 16px;
  margin-top: 16px;
  line-height: 1.5px;
}

button {
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: white;
  border: 1px solid black;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: black;
  color: white;
  transition: 0.4s;
}

details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }

    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }


  render() {
    return html`
    <div id = "cardlist">
      <div class="card">
        <h1 class="cardheader">${this.title}</h1>
          <img src=${this.image} alt=${this.title} />
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
        <p>Take an exciting journey beyond Earth to explore the moon. Experience life among the stars.</p>
        <slot>${this.description}</slot>
        </div>
        </details>
        <a href=${this.link} target="_blank">
          <button class="btn"><em>Details</em></button>
        </a>
      </div>
    </div>`;
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      title: { type: String },
      image: { type: String },
      link: { type: String},
    };
  }
}


globalThis.customElements.define(MyCard.tag, MyCard);
