// (c) 2025 The MITRE Corporation.
import { css, unsafeCSS } from "lit";

import style from '../../styles/styles.scss?inline';

export const badgeStyles = [
  unsafeCSS(style),
  css`
    :host {
      display: block;
    }

    .irs-badge {
      width: 16px;
      height: 16px;
      // border: 1px solid #ffffff;
      border-radius: 8px;
      background-color: #d11242;
      font-size: 12px;
      line-height: 16px;
      color: #ffffff;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-left: 4px;
    }

    .irs-badge-double {
      width: 22px;
    }

    .irs-badge-triple {
      width: 28px;
    }
  `
];