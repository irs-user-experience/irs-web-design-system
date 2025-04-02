// (c) 2025 The MITRE Corporation.
import { css, unsafeCSS } from 'lit';

import style from '../../styles/styles.scss?inline';

export const inputStepperStyles = [
  unsafeCSS(style),
  css`
    :host {
      display: block;

      --color-black: #1b1b1b;
      --color-gray: #5b616b;
      --color-red: #d11242;
      --color-white: #f3f3f3;

      .wrapper {
        display: flex;
        margin-top: 2px;
      
        &:focus {
          outline: none;
        }
      }
      
      .stepper-button {
        height: 44px;
        width: 44px;
        margin: 0;
        padding: 0;
      
        span {
          display: inline-flex;
        }
      
        &:focus:not(.focus-visible):before {
          z-index: 2;
          height: calc(100% + 8px);
          width: calc(100% + 8px);
          top: -4px;
          left: -4px;
        }
      
        &:focus {
          z-index: 4;
        }
      
        &:hover:not(:disabled) {
          background-color: var(--color-white);
        }
      }
      
      .decrement-button {
        border-radius: 4px 0px 0px 4px !important;
      }
      
      .increment-button {
        border-radius: 0px 4px 4px 0px !important;
      }
      
      .input-field {
        text-align: center;
        margin-right: -1px;
        margin-left: -1px;
        margin-top: 0;
        line-height: 24px;
        color: var(--color-black);
        font-size: 16px;
        height: 44px;
        width: 98px !important;
        z-index: 3 !important;
        box-sizing: border-box;
      }
      
      .input-field::-webkit-outer-spin-button,
      .input-field::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      
      .hint-message {
        font-size: 14px;
        line-height: 20px;
        color: var(--color-gray);
        display: block;
        margin-bottom: 8px;
      }
      
      .error-message {
        font-size: 14px;
        line-height: 20px;
        color: var(--color-red);
        display: block;
        margin-top: 8px;
      }

      .input-field-has-error {
        border-color: var(--color-red);
      }
    }
  `
];