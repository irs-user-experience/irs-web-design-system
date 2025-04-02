// (c) 2025 The MITRE Corporation.
import { LitElement, html, nothing } from 'lit';
import { inputStepperStyles } from './irs-input-stepper.css';
import { classMap } from 'lit/directives/class-map.js';

import sprite from 'assets/uswds/img/sprite.svg';

const remove = `${sprite}#remove`;
const add = `${sprite}#add`;

import _ from 'lodash';

export class IrsInputStepper extends LitElement {
  static properties = {
    min: {type: Number},
    max: {type: Number},
    label: {type: String},
    inputDescription: {type: String, attribute: 'input-description'},
    initialValue: {type: Number, attribute: 'initial-value'},
    required: {type: Boolean},
    showHint: {type: Boolean, attribute: 'show-hint'},
    _inputField: {state: true},
    _disableDec: {state: true},
    _disableInc: {state: true},
    _hasError: {state: true},
    _formattedDescription: {state: true},
    _errorMessage: {state: true},
    _warning: {state: true},
    _valueNowText: {state: true},
    _hintMessage: {state: true},
    _internalId: {state: true}
  };

  static styles = [inputStepperStyles];

  constructor() {
    super();

    this.min = 1;
    this.max = 10;
    this.inputDescription = '';
    this.initialValue = this.min;
    this.required = false;
    this.showHint = false;

    this._internalId = _.uniqueId();
  }

  firstUpdated() {
    this._inputField = this.initialValue;
    this._disableDec = this._inputField <= this.min;
    this._disableInc = this._inputField >= this.max;
    this._hasError = false;
    this._formattedDescription = this.inputDescription && this.inputDescription[0].toLowerCase() + this.inputDescription.substring(1);
    this._errorMessage = 'Error: This field is required';
    this._warning = '';
    this._valueNowText = '';
    this._hintMessage = `Value must be between ${this.min}-${this.max}`;
  }

  willUpdate(changedProperties) {
    if (changedProperties.has('_inputField')) {
      this.dispatchEvent(new CustomEvent(this._inputField, {bubbles: true, composed: true}));

      if (this._inputField <= this.min || !this._inputField) {
        this._disableDec = true;
      } else {
        this._disableDec = false;
      }

      if (this._inputField >= this.max) {
        this._disableInc = true;
      } else {
        this._disableInc = false;
      }
    }
  }

  validate(val) {
    if (!val && val !== 0) {
      if (this.required) {
        this._hasError = true;
        if (this.inputDescription) {
          this._errorMessage = `Error: The number of ${this._formattedDescription} is required`;
        } else {
          this._errorMessage = 'Error: This field is required';
        }
      }
    } else if (val < this.min || val > this.max) {
      this._hasError = true;
      this._errorMessage = `Error: Value is outside of the range ${this.min}-${this.max}`;
    } else {
      this._hasError = false;
    }
  }

  _handleOnInput(e) {
    const target = e.target;
    this._inputField = parseInt(target.value);
    this.validate(target.value);
  }

  _handleInputKeyDown(e) {
    if (/(ArrowUp|ArrowDown)/.test(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      const diff = e.key === 'ArrowUp' ? 1 : -1;
      const curVal = this._inputField ? this._inputField : 0;
      const val = curVal + diff;
      this.updateValue(val);
    }
  }

  updateValue(newVal) {
    const currentValue = this._inputField ? this._inputField : this.min;

    // valid new value
    if ((newVal < currentValue && newVal >= this.min) ||
        (newVal > currentValue && newVal <= this.max)
    ) {
      this._inputField = newVal;
      this.validate(newVal);
      this._valueNowText = `${newVal} ${this._formattedDescription}`;
      setTimeout(() => {
        this._valueNowText = '';
      }, 500);
      this.announceLimitWarning(newVal);
    }

    // trying to go below min
    if (newVal < this.min && currentValue == this.min) {
      this.announceLimitWarning(this.min);
    }

    // trying to go above max
    if (newVal > this.max && currentValue == this.max) {
      this.announceLimitWarning(this.max);
    }
  }

  _increment(e) {
    const currentValue = this._inputField ? this._inputField : this.min;
    const newValue = currentValue + 1;
    this.updateValue(newValue);
  }

  _decrement(e) {
    const currentValue = this._inputField ? this._inputField : this.min;
    const newValue = currentValue - 1;
    this.updateValue(newValue);
  }

  announceLimitWarning(val) {
    setTimeout(() => {
      if (val === this.min || val === this.max) {
        this._warning = val === this.max ?
          `You have reached the maximum number of ${this._formattedDescription}` :
          `You have reached the minimum number of ${this._formattedDescription}`;
        setTimeout(() => {
          this._warning = '';
        }, 500);
      }
    }, 500);
  }

  render() {
    this.validate(this._inputField);

    const buttonClasses = {
      'usa-button': true,
      'usa-button--outline': true,
      'stepper-button': true
    };

    const inputClasses = {
      'usa-input': true,
      'input-field': true,
      'input-field-has-error': this._hasError
    }

    return html`
      <div id='irs-input-stepper-${this._internalId}'>
        ${this.label ? html`
            <div>
              <label class="usa-label">
              ${this.label}
              ${this.required ? html`<span aria-label='required' class='text-red'> *</span>` : nothing}
              </label>
            </div>` : nothing
        }
        ${this.showHint ? html`<p class='hint-message usa-hint'>${this._hintMessage}</p>` : nothing}
        <div class='wrapper'>
          <button
            class='${classMap(buttonClasses)} decrement-button'
            aria-label='Remove ${this.inputDescription}'
            @click='${this._decrement}'
            ?disabled=${this._disableDec}
            ?aria-disabled=${this._disableDec}
          >
            <svg
              class='usa-icon'
              width='12px'
              height='2px'
            >
              <use href='${remove}'></use>
            </svg>
          </button>
          <input
            class='${classMap(inputClasses)}'
            .value='${this._inputField}'
            aria-label='Number of ${this.inputDescription}'
            id='irs-input-stepper-input-field-${this._internalId}'
            required='${this.required}'
            type='number'
            inputMode='numeric'
            pattern='[0-9]'
            @keydown='${this._handleInputKeyDown}'
            @input='${this._handleOnInput}'
          />
          <button
            class='${classMap(buttonClasses)} increment-button'
            aria-label='Add ${this.inputDescription}'
            @click='${this._increment}'
            ?disabled=${this._disableInc}
            ?aria-disabled=${this._disableInc}
          >
            <svg
              class='usa-icon'
              width='12px'
              height='2px'
            >
              <use href='${add}'></use>
            </svg>
          </button>
        </div>
        <p
          id='irs-input-stepper-error-${this._internalId}'
          aria-live='polite'
          class='error-message'
        >
          ${this._hasError ? this._errorMessage : nothing}
        </p>
        <span
          data-component='input-stepper-valuenow'
          aria-live='polite'
          aria-label='${this._valueNowText}'
        ></span>
        <span
          data-component='input-stepper-warning'
          aria-live='polite'
          aria-label='${this._warning}'
        ></span>
      </div>
    `
  }
}

window.customElements.define('irs-input-stepper', IrsInputStepper);