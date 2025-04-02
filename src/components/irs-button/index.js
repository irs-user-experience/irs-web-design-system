// (c) 2025 The MITRE Corporation.
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import _ from 'lodash';

import { buttonStyles } from './irs-button.css';

export class IrsButton extends LitElement {
  static styles = [buttonStyles];

  static get properties() {
    return {
      // button, submit, or reset
      type: {type: String},

      // Use secondary color
      secondary: {type: Boolean},

      // Use base color
      base: {type: Boolean},
      
      // cool or warm
      accentStyle: {
        attribute: 'accent-style',
        type: String
      },

      // Use an outline only button
      outline: {type: Boolean},

      // Inverse colors for outline buttons on dark backgrounds
      inverse: {type: Boolean},

      // big
      size: {type: String},
      
      // Use an unstyled link
      unstyled: {type: Boolean},

      // Disabled variant
      disabled: {type: Boolean},

      _internalId: {state: true}
    }
  }

  constructor() {
    super();
    this._internalId = _.uniqueId();
  }

  render() {
    const classes = {
      'usa-button': true,
      'usa-button--secondary': this.secondary,
      'usa-button--base': this.base,
      'usa-button--outline': this.outline || this.inverse,
      'usa-button--inverse': this.inverse,
      'usa-button--unstyled': this.unstyled,
      'usa-button--accent-warm': this.accentStyle === 'warm',
      'usa-button--accent-cool': this.accentStyle === 'cool',
      'usa-button--big': this.size === 'big',
    };

    return html`
      <button 
        id="irs-button-${this._internalId}"
        type=${this.type}
        class=${classMap(classes)}
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `
  }
}

window.customElements.define('irs-button', IrsButton);