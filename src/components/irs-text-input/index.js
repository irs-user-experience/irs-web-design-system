// (c) 2025 The MITRE Corporation.
import { LitElement, html } from 'lit';
import { textInputStyles } from './irs-text-input.css';
import { classMap } from 'lit/directives/class-map.js';
import _ from 'lodash';

export class IrsTextInput extends LitElement {
  static properties = {
    value: { type: String },
    placeholder: { type: String },
    disabled: { type: Boolean },
    type: { type: String },
    validationStatus: { type: String },
    inputSize: { type: String },
    _internalId: {state: true},
    label: { type: String },
    hintText: { type: String }
  };

  static styles = [textInputStyles];
  
  constructor() {
    super();
    this.value = '';
    this.placeholder = 'Enter text';
    this.disabled = false;
    this.type ='text';
    this.validationStatus = 'default';
    this.inputSize = 'default';
    this._internalId = _.uniqueId();
    this.label = 'Label';
    this.hintText = 'Hint text';
  }

  handleInput(event) {
  this.value = event.target.value;
  this.dispatchEvent(new CustomEvent('input-change', {
    detail: { value: this.value }
  }));
}

  render() {
    return html`
      <label for="text-input-${this._internalId}" class="${classMap({
        'label': true,
        'label--error': this.validationStatus === 'error',
        'label--disabled': this.disabled
      })}">${this.label}</label>
      <span class="${classMap({
        'hint-text': true,
        'hint-text--error': this.validationStatus === 'error',
        'hint-text--disabled': this.disabled
      })}">${this.hintText}</span>
      <input
        type="${this.type}"
        id="text-input-${this._internalId}"
        class="${classMap({
          'usa-input': true,
          'usa-input--error': this.validationStatus === 'error',
          'usa-input--success': this.validationStatus === 'success',
          'usa-input--small': this.inputSize === 'small',
          'usa-input--medium': this.inputSize === 'medium',
          'disabled': this.disabled
        })}"
        .value="${this.value}"
        placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        aria-label="${this.label} ${this.validationStatus === 'error' ? `error: ${this.hintText}` : this.validationStatus === 'success' ? 'success' : ''}"
        @input="${this.handleInput}"
      />
    `;
  }
}

window.customElements.define('irs-text-input', IrsTextInput);