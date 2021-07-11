import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators';

/**
 * A "pill" tag
 *
 * @slot - This element has a slot
 * @csspart pill - The pill
 */

@customElement('example-pill')
export class ExamplePill extends LitElement {
  render() {
    return html`<div>Pill goes here</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'example-pill': ExamplePill;
  }
}
