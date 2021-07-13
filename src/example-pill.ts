import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators';

/**
 * A "pill" tag
 *
 * @slot - This element has a slot
 * @csspart pill - The pill
 */

@customElement('example-pill')
export class ExamplePill extends LitElement {
  static styles = css`
    :host {
      color: rgba(6, 95, 70, 1);
      font-weight: 500;
      font-size: 0.75rem;
      line-height: 1rem;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      background-color: rgba(209, 250, 229);
      border-radius: 9999px;
    }
  `;
  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'example-pill': ExamplePill;
  }
}
