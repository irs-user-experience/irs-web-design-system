// (c) 2025 The MITRE Corporation.
import { LitElement, html, css } from 'lit';
import { checkboxStyles } from './irs-checkbox.css.js';
import _ from 'lodash';

export class IrsCheckbox extends LitElement {
  static properties = {
    _internalId: {state: true},
    name: { type: String },
    label: { type: String },
    value: { type: String },
    tile: { type: Boolean },
    labelDescription: { type: String },
    disabled: { type: Boolean }
  };

  static styles = [checkboxStyles];

  constructor() {
    super();
    this._internalId = _.uniqueId();
    this.name = '';
    this.label = '';
    this.value = '';
    this.tile = false;
    this.labelDescription = '';
    this.disabled = false;
  }

  handleCheckboxClick() {
    this.dispatchEvent(new CustomEvent('checkbox-click', {
      detail: { value: this.value }
    }));
  }

  render() {
    return html`
      <div data-testid="checkbox" class="usa-checkbox">
        <input
          type="checkbox"
          class="${this.tile ? 'usa-checkbox__input usa-checkbox__input--tile' : 'usa-checkbox__input'}"
          id="checkbox-${this._internalId}"
          name="${this.name}"
          ?disabled="${this.disabled}"
          .value="${this.value}"
          @click="${this.handleCheckboxClick}"
          aria-label="${this.label}"
        />
        <label class="usa-checkbox__label" for="checkbox-${this._internalId}">
          ${this.label}
          ${this.labelDescription ? html`<span class="usa-checkbox__label-description">${this.labelDescription}</span>` : ''}
        </label>
      </div>
    `;
  }
}

window.customElements.define('irs-checkbox', IrsCheckbox);
