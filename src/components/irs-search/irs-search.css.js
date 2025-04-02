// (c) 2025 The MITRE Corporation.
import { css, unsafeCSS } from "lit";

import style from '../../styles/styles.scss?inline';

export const searchStyles = [
  unsafeCSS(style),
  css`
    :host {
      display: block;
    }
  `
];
