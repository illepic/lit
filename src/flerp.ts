import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators';

@customElement('flerp-herp')
export class FlerpHerp extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;
  render() {
    return html`<div>hello this is flerp</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'flerp-herp': FlerpHerp;
  }
}
