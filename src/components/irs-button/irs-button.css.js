// (c) 2025 The MITRE Corporation.
import { css, unsafeCSS } from 'lit';

import style from '../../styles/styles.scss?inline';

export const buttonStyles = [
  unsafeCSS(style),
  css`
    :host {
      display: block;
    }

    .usa-button--outline.usa-button--inverse {
      box-shadow: inset 0 0 0 2px #e6e6e6;
      color: #e6e6e6;
    }
  `
];