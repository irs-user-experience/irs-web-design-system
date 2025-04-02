// (c) 2025 The MITRE Corporation.
import { LitElement, html } from 'lit';
import { badgeStyles } from './irs-badge.css';
import { classMap } from 'lit/directives/class-map.js';
import _ from 'lodash';

export class IrsBadge extends LitElement {
  static get properties() {
    return {
      value: {
        type: Number
      },
      hiddenMessage: {
        type: String,
        attribute: 'hidden-message'
      },
      _internalId: {
        state: true
      }
    }
  }

  static styles=[badgeStyles]

  constructor() {
    super();

    this.value = 1;
    this.hiddenMessage = '';
    this._internalId = _.uniqueId();
  }

  render() {
    const classes = {
      'irs-badge': true,
      'irs-badge-double': this.value > 9,
      'irs-badge-triple': this.value > 99,
      'font-body-md': true
    };

    return html`
      <span
        id='irs-badge-${this._internalId}'
        class='${classMap(classes)}'
        aria-label='${this.hiddenMessage}'
      >
        ${this.value < 100 ? this.value : '99+'}
      </span>
    `
  }
}

window.customElements.define('irs-badge', IrsBadge);