// (c) 2025 The MITRE Corporation.
import { css, unsafeCSS } from "lit";

import style from '../../styles/styles.scss?inline';

export const textInputStyles = [
  unsafeCSS(style),
  css`
    :host {
      display: block;
      
      --color-error: #B50909;
      --color-disabled: gray;
      --color-hint-text: #666;
      --color-disabled-bg: #f0f0f0;
    }

    input {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
    }

    input.usa-input--error,
    input.usa-input--success {
      padding-left: 5px;
    }

    input.usa-input--medium {
      max-width: 350px;
    }

    input.disabled {
      background-color: var(--color-disabled-bg);
      cursor: not-allowed;
    }

    .label {
      margin-bottom: 4px;
      display: block;
      font-family: "Public Sans Web", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .label--disabled {
      color: var(--color-disabled);
    }

    .label--error {
      font-weight: bold;
    }

    .hint-text {
      font-size: 14px;
      color: var(--color-hint-text);
      margin-top: 4px;
      display: block;
      font-family: "Public Sans Web", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .hint-text--error {
      color: var(--color-error);
      font-weight: bold;
    }

    .hint-text--disabled {
      color: var(--color-disabled);
    }
  `
];