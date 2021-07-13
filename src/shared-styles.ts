import {css} from 'lit';

export const reset = css`
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
`;

export const shared = css`
  :host {
    -webkit-font-smoothing: antialiased;
    font-family: Inter var, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', 'Noto Color Emoji';
  }
`;
