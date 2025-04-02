// (c) 2025 The MITRE Corporation.
import { css, unsafeCSS } from 'lit';

import style from '../../styles/styles.scss?inline';

export const checkboxStyles = [
  unsafeCSS(style),
  css`
    :host {
      display: block;
      --color-label-description: #1b1b1b;
      --color-disabled: #757575;
      --color-tile-border-disabled: #737373;
      --color-tile-bg-checked: #d9e7f6;
    }
    .usa-checkbox {
      display: flex;
      align-items: center;
      max-width: 320px;
    }
    .usa-checkbox__input {
      margin-right: 8px;
      border-radius: 2px;
    }
    .usa-checkbox__input--tile {
      border-radius: 2px
    }

    .usa-checkbox__label {
      display: flex;
      flex-direction: column;
    }
    .usa-checkbox__label-description {
      font-size: 0.875em;
      color: var(--color-label-description);
    }

    .usa-checkbox__input:disabled + [class*="__label"] * {
      color: var(--color-disabled);
    }

    .usa-checkbox__input--tile:disabled + [class*="__label"] {
      border-color: var(--color-tile-border-disabled);
      border-style: dotted;
    }

    .usa-checkbox__input--tile:checked + [class*=__label] {
      background-color: var(--color-tile-bg-checked);
    }
  `
];