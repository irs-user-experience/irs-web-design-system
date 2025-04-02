// (c) 2025 The MITRE Corporation.
import { css, unsafeCSS } from "lit";

import style from '../../styles/styles.scss?inline';

export const tabViewStyles = [
  unsafeCSS(style),
  css`
    :host {
      font-family: "Public Sans Web", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      
      display: block;

      --color-blue: #00599c;
      --color-blue-dark: #002d62;
      --color-blue-vivid: #2491ff;
      --color-gray: #d6d7d9;
      --color-gray-text: #5b616b;
      --font-bold: 700;
      --font-size-base: 16px;
      --tabs-underline-width: 3px;

      .tabs {
        margin-top: 12px;
        margin-bottom: 12px;
      }
      
      .tabList {
        border-bottom: solid 1px var(--color-gray-text);
        margin-bottom: 16px;
        border-bottom: solid 1px var(--color-gray);
        min-width: fit-content;
      }
      
      .wrapper {
        @include media-breakpoint-down(md) {
          overflow-x: auto;
          white-space: nowrap;
          padding: 4px;
          min-width: 100%;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      }
      
      .wrapper::-webkit-scrollbar {
        display: none;
      }
      
      .tab {
        margin-right: 32px;
        color: var(--color-blue);
        cursor: pointer;
        font-size: var(--font-size-base);
        line-height: 1;
        text-transform: none;
        margin-bottom: -1px;
        padding: 12px 0;
        text-decoration: none;
        
        &:last-of-type {
          margin-right: 0;
        }
      
        &:focus {
          outline: 3px solid var(--color-blue-vivid);
        }
      
        &[aria-selected="true"], &[aria-selected="true"]:hover {
          font-weight: var(--font-bold);
          border-bottom: solid var(--tabs-underline-width) var(--color-blue-dark);
          color: var(--color-blue-dark);
        }
      
        &.disabled {
          color: var(--color-gray-text);
          cursor: not-allowed;
          text-decoration: none;

          &:hover {
            color: var(--color-gray-text);
          }
        }
      
        &:hover {
          font-size: var(--font-size-base);
          font-weight: normal;
          color: var(--color-blue-dark);
        }
      }
      
      .tabPanel:focus {
        outline: 3px solid var(--color-blue-vivid);
        outline-offset: 0;
      }
    }
  `
];