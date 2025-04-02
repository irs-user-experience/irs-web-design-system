// (c) 2025 The MITRE Corporation.
import { css, unsafeCSS } from 'lit';

import style from '../../styles/styles.scss?inline';

export const linkStyles = [
  unsafeCSS(style),
  css`
    :host {
      --link-color-alt: #e6e6e6;
      --link-color-alt-hover: #f0f0f0;

      .usa-link {
        font-family: "Public Sans Web", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }

      .usa-link.alt {
        color: var(--link-color-alt);
      }

      .usa-link.alt:hover {
        color: var(--link-color-alt-hover);
      }

      .usa-link.alt:visited {
        color: var(--link-color-alt);
      }

      .usa-link.alt:visited:hover {
        color: var(--link-color-alt-hover);
      }
    }
  `
];