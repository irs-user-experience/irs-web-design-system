// (c) 2025 The MITRE Corporation.
import { css, unsafeCSS } from "lit";

import style from '../../styles/styles.scss?inline';

export const backToTopStyles = [
  unsafeCSS(style),
  css`
    :host {
      display: block;

      --color-white: white;
      --color-blue: #00599c;
      --color-blue-dark: #002d62;
      --color-blue-vivid: #2491ff;

      .backToTop {
        background-color: var(--color-white);
        color: var(--color-blue);
        text-decoration: none;
        border: 2px solid var(--color-blue);
        border-right: none;
        height: 44px;
        border-radius: 32px 0 0 32px;
        display: flex;
        align-items: center;
        position: fixed;
        right: 0;
        transition: right 0.75s ease-in-out;
        bottom: 80px;
        z-index: 100;
        padding-left: 32px;
        cursor: pointer;
        box-sizing: border-box;

        svg {
          transform: scale(0.75);
          position: relative;
          z-index: 2;
          color: var(--color-white);
        }

        &:after {
          content: "";
          display: inline-block;
          position: absolute;
          height: 32px;
          width: 32px;
          background-color: var(--color-blue);
          border-radius: 50%;
          z-index: 1;
          left: 4px;
          margin-right: 16px;
        }

        &.relative {
          position: relative;
          top: 0;
          right: 0;
          transition: right 0.75s ease-in-out;
          &.hidden {
            right: 0;
            transition: right 0.75s ease-in-out;
          }
        }
        
        &.hover,
        &:hover {
          background-color: var(--color-white);
          color: var(--color-blue-dark);
          border: 2px solid var(--color-blue-dark);
          border-right: none;

          &:after {
            background-color: var(--color-blue-dark);
          }
        }

        &.hidden {
          right: 0px;
          transition: 0.75s ease-in-out;
        }

        padding: 4px 16px 4px 4px;

        span {
          vertical-align: baseline;
          margin-right: 0;
          padding-left: 16px;
          font-size: 16px;
          line-height: 24px;
        }

        span,
        svg {
          pointer-events: none;
          position: relative;
        }

        span + svg {
          margin-left: 15px;
        }

        svg + span {
          margin-left: 0px;
        }

        > svg {
          position: relative;
          width: 32px;
          height: 32px;
        }
      }
      
      .backToTop:focus {
        outline: none;

        &:before {
          box-sizing: border-box;
          border: 3px solid var(--color-blue-vivid);
          content: "";
          display: block;
          height: calc(100% - -18px);
          width: calc(100% - -18px);
          position: absolute;
          top: -9px !important;
          left: -8px;
          outline: none;
          padding: 0px;
        }
      }

      button:not([disabled]) {
        &.active,
        &:active,
        &.focus,
        &:focus {
          outline: none;
        }
      }

      .usa-button {
        margin-right: 0px;
      }
    }
  `
];