// (c) 2025 The MITRE Corporation.
import { LitElement, html, nothing } from 'lit';
import { selectStyles } from './irs-select.css';
import _ from 'lodash';

export class IrsSelect extends LitElement {
  static properties = {
    label: {type: String},
    disabled: {type: Boolean},
    required: {type: Boolean},
    _internalId: {state: true}
  };

  static styles = [selectStyles];
 
  constructor() {
    super();
    this.label = 'Dropdown label';
    this.disabled = false;
    this.required = false;
    this._internalId = _.uniqueId();
  }

  handleOnSelect(event) {
    let selectedValue = event.target.value;
    this.dispatchEvent(new CustomEvent('on-select', {
      detail: { value: selectedValue }
    }));
  }

  render() {
    const options = [];

    for (var i = 0; i < this.children.length; i++) {
      let option = this.children[i].innerHTML;
      let value = this.children[i].value;
      let selected = this.children[i].selected;
      let disabled = false;

      // Disable the first option if the dropdown is required.
      if (i === 0 && this.required) {
        disabled = true;
      }

      options.push(html`<option value=${value} ?selected=${selected} ?disabled=${disabled}>${option}</option>`);
    }

    return html`
      <div id="irs-select-wrapper-${this._internalId}">
        <label class="usa-label" for="irs-select-${this._internalId}">
          ${this.label}
          ${this.required ? html`<span aria-label='required' class='text-red'> *</span>` : nothing}
        </label>
        <select
          class="usa-select"
          id="irs-select-${this._internalId}"
          ?disabled=${this.disabled}
          ?required=${this.required}
          @change=${this.handleOnSelect}
        >
          ${options}
        </select>
      </div>
    `
  }
}

window.customElements.define('irs-select', IrsSelect);