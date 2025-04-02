// (c) 2025 The MITRE Corporation.
import { css, unsafeCSS } from 'lit';

import style from '../../styles/styles.scss?inline';

export const selectStyles = [
  unsafeCSS(style),
  css`
    :host {
      display: block;
      max-width: 360px;
    }
  `
];
