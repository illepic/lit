/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import './flerp';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('example-card')
export class ExampleCard extends LitElement {
  static styles = css`
    *,
    ::after,
    ::before {
      box-sizing: border-box;
    }
    img,
    video {
      max-width: 100%;
      height: auto;
    }
    blockquote,
    dd,
    dl,
    figure,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    p,
    pre {
      margin: 0;
    }
    audio,
    canvas,
    embed,
    iframe,
    img,
    object,
    svg,
    video {
      display: block;
      vertical-align: middle;
    }
    a {
      text-decoration: inherit;
    }
    :host {
      display: block;
      max-width: 240px;
      text-align: center;
      background-color: #fff;

      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      -webkit-font-smoothing: antialiased;
      font-family: Inter var, ui-sans-serif, system-ui, -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol', 'Noto Color Emoji';
    }
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
    .card__top {
      flex-direction: column;
      flex: 1 1 0%;
      padding: 2rem;
    }
    .card__image {
      border-radius: 9999px;
      flex-shrink: 0;
      width: 8rem;
      height: 8rem;
      margin-left: auto;
      margin-right: auto;
    }
    .card__title {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin-top: 1.5rem;
    }
    .card__details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      margin-top: 0.25rem;
    }
    .card__details-title {
      color: rgba(107, 114, 128, 1);
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    .card__details-role {
      margin-top: 0.75rem;
    }
    .card__details-role-pill {
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
    .card__bottom {
      border-top: 1px solid rgba(229, 231, 235, 1);
    }
    .card__bottom-inner {
      display: flex;
    }
    .card__bottom-block {
      display: flex;
      flex: 1 1 0%;
      width: 0;
    }
    .card__bottom-text {
      color: rgba(55, 65, 81, 1);
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.25rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-bottom-left-radius: 0.5rem;
      justify-content: center;
      align-items: center;
      flex: 1 1 0%;
      width: 0;
      display: inline-flex;
    }
    .card__bottom-icon {
      width: 1.25rem;
      height: 1.25rem;
    }
    .card__bottom-block-text {
      margin-left: 0.75rem;
    }
  `;

  /**
   * Optional email
   */
  @property()
  email = 'hello@flerp.com';

  /**
   * Optional telephone
   */
  @property()
  telephone = '1-202-555-1111';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  render() {
    return html`
      <div class="card">
        <div class="card__top">
          <img
            class="card__image"
            src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
          />
          <h3 class="card__title">Courtney Henry</h3>
          <dl class="card__details">
            <dt class="sr-only">Title</dt>
            <dd class="card__details-title">Investor Factors Associate</dd>
            <dt class="sr-only">Role</dt>
            <dd class="card__details-role">
              <span class="card__details-role-pill">Admin</span>
            </dd>
          </dl>
        </div>
        <div class="card__bottom">
          <div class="card__bottom-inner">
            <div class="card__bottom-block">
              <a href="#" class="card__bottom-text">
                <svg
                  class="card__bottom-icon"
                  x-description="Heroicon name: solid/mail"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  ></path>
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  ></path>
                </svg>
                <span class="card__bottom-block-text">Email</span>
              </a>
            </div>
            <div class="card__bottom-block">
              <a href="tel:1-202-555-0104" class="card__bottom-text">
                <svg
                  class="card__bottom-icon"
                  x-description="Heroicon name: solid/phone"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  ></path>
                </svg>
                <span class="card__bottom-block-text">Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // private _onClick() {
  //   this.count++;
  // }

  foo(): string {
    return 'foo';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'example-card': ExampleCard;
  }
}
