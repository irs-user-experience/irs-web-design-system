// (c) 2025 The MITRE Corporation.
import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { linkStyles } from './irs-link.css';
import _ from 'lodash';

export class IrsLink extends LitElement {
  static properties = {
    href: {
      type: String
    },
    external: {
      type: Boolean
    },
    alt: { // alternate color for links on dark backgrounds
      type: Boolean
    },
    _internalId: {
      state: true
    }
  };

  static styles = [linkStyles];

  hasLinkChild() {
    const childLink = this.querySelector("a");
    if (!childLink) return false;

    this.href = childLink.href;
    this.slottedChildren = childLink;
    this.shadowRoot.appendChild(this.slottedChildren);
  }

  constructor() {
    super();
    this.external = false;
    this.alt = false;
    this._internalId = _.uniqueId();
  }

  render() {
    const classes = {
      'usa-link': true,
      'usa-link--external': this.external,
      'alt': this.alt
    };

    if (this.hasLinkChild()) {
      return html`
        <a
          id="irs-link-${this._internalId}"
          class=${classMap(classes)}
          href="${this.href}"
          rel=${this.external ? 'noreferrer' : nothing}
          aria-label=${this.external ? 'external link' : nothing}
        >
          ${this.slottedChildren}
        </a>
      `;
    } else {
      return html`
        <a
          id="irs-link-${this._internalId}"
          class=${classMap(classes)}
          href="${this.href}"
          rel=${this.external ? 'noreferrer' : nothing}
          aria-label=${this.external ? 'external link' : nothing}
        >
          <slot></slot>
        </a>
      `;
    }
  }
}

window.customElements.define('irs-link', IrsLink);