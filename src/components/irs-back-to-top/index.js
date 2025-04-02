// (c) 2025 The MITRE Corporation.
import { LitElement, html } from "lit";
import { backToTopStyles } from './irs-back-to-top.css';
import { classMap } from 'lit/directives/class-map.js';

import sprite from 'assets/uswds/img/sprite.svg';

const arrowUp = `${sprite}#arrow_upward`;

import _ from 'lodash';

export class IrsBackToTop extends LitElement {
  static properties = {
    iconOnly: {type: Boolean, attribute: 'icon-only'},
    label: {type: String},
    relative: {type: Boolean},
    _internalId: {state: true}
  };

  static styles = [backToTopStyles];

  constructor() {
    super();

    this.iconOnly = false;
    this.label = 'Back to top';
    this.relative = false;
    this._internalId = _.uniqueId();
  }

  goToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  render() {
    const classes = {
      'usa-button': true,
      'backToTop': true,
      'relative': this.relative
    };

    return html`
      <button
        id="irs-back-to-top-${this._internalId}"
        class="${classMap(classes)}"
        @click="${this.goToTop}"
        aria-label="${this.label}"
      >
        <svg class="usa-icon" focusable="false">
          <use href="${arrowUp}"></use>
        </svg>
        ${this.iconOnly ? '' : this.label}
      </button>
    `
  }
}

window.customElements.define('irs-back-to-top', IrsBackToTop);