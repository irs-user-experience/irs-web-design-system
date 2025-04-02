// (c) 2025 The MITRE Corporation.
import { css, unsafeCSS } from "lit";

import style from '../../styles/styles.scss?inline';

export const spinnerStyles = [
  unsafeCSS(style),
  css`
    @keyframes fade {
      from {
        opacity: 0.9;
      }

      to {
        opacity: 0.1;
      }
    }
    
    :host {
      /**
       * Custom property definitions
       */
      // TODO: Since USWDS is moving away from sass vars as
      // design tokens, we should follow.
      // Probably could refactor this once their custom css
      // property stuff solidifies a little more.
      // --theme-spinner-color: var(--usa-base-primary);
      --theme-spinner-animation-time: 1000ms;

      display: block;
      padding: 24px;

      .irs-spinner {
        position: relative;
        display: block;
        margin-right: auto;
        margin-left: auto;
        
        &.irs-spinner-small {
          width: 24px;
          height: 24px;
        }
        
        &.irs-spinner-medium {
          width: 48px;
          height: 48px;
        }

        &.irs-spinner-large {
          width: 72px;
          height: 72px;
        }
      
        > .irs-spinner-bar {
          position: absolute;
          top: calc(50% - 15.6%);
          left: calc(50% - 3.125%);
          width: 6.25%;
          height: 31.2%;
          animation: fade var(--theme-spinner-animation-time) linear 0ms infinite;
          border-radius: 1px;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
          opacity: 0;
        }
      
        .irs-spinner-bar-1 {
          animation-delay: 0ms;
          transform: rotate(0deg) translate(0, -105%);
        }
      
        .irs-spinner-bar-2 {
          animation-delay: calc(1ms - var(--theme-spinner-animation-time) * (11 / 12));
          transform: rotate(30deg) translate(0, -105%);
        }
      
        .irs-spinner-bar-3 {
          animation-delay: calc(1ms - var(--theme-spinner-animation-time) * (10 / 12));
          transform: rotate(60deg) translate(0, -105%);
        }
      
        .irs-spinner-bar-4 {
          animation-delay: calc(1ms - var(--theme-spinner-animation-time) * (9 / 12));
          transform: rotate(90deg) translate(0, -105%);
        }
      
        .irs-spinner-bar-5 {
          animation-delay: calc(1ms - var(--theme-spinner-animation-time) * (8 / 12));
          transform: rotate(120deg) translate(0, -105%);
        }
      
        .irs-spinner-bar-6 {
          animation-delay: calc(1ms - var(--theme-spinner-animation-time) * (7 / 12));
          transform: rotate(150deg) translate(0, -105%);
        }
      
        .irs-spinner-bar-7 {
          animation-delay: calc(1ms - var(--theme-spinner-animation-time) * (6 / 12));
          transform: rotate(180deg) translate(0, -105%);
        }
      
        .irs-spinner-bar-8 {
          animation-delay: calc(1ms - var(--theme-spinner-animation-time) * (5 / 12));
          transform: rotate(210deg) translate(0, -105%);
        }
      
        .irs-spinner-bar-9 {
          animation-delay: calc(1ms - var(--theme-spinner-animation-time) * (4 / 12));
          transform: rotate(240deg) translate(0, -105%);
        }
      
        .irs-spinner-bar-10 {
          animation-delay: calc(1ms - var(--theme-spinner-animation-time) * (3 / 12));
          transform: rotate(270deg) translate(0, -105%);
        }
      
        .irs-spinner-bar-11 {
          animation-delay: calc(1ms - var(--theme-spinner-animation-time) * (2 / 12));
          transform: rotate(300deg) translate(0, -105%);
        }
      
        .irs-spinner-bar-12 {
          animation-delay: calc(1ms - var(--theme-spinner-animation-time) * (1 / 12));
          transform: rotate(330deg) translate(0, -105%);
        }
      }
    }
  `
];
