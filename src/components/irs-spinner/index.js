// (c) 2025 The MITRE Corporation.
import { LitElement, html } from 'lit';
import { spinnerStyles } from './irs-spinner.css';
import _ from 'lodash';

export class IrsSpinner extends LitElement {
  static styles=[spinnerStyles]

  static get properties() {
    return {
      color: {
        type: 'primary' | 'dark' | 'light'
      },
      size: {
        type: 'small' | 'medium' | 'large'
      },
      _internalId: {
        state: true
      }
    }
  }

  constructor() {
    super();

    this.color = 'primary';
    this.size = 'medium';
    this._internalId = _.uniqueId();
  }

  render() {
    let colorClass = 'bg-primary';
    if (this.color === 'light') colorClass = 'bg-white';
    else if (this.color === 'dark') colorClass = 'bg-ink';

    return html`
      <div
        id="irs-spinner-${this._internalId}"
        class="irs-spinner irs-spinner-${this.size}"        
        data-component="Spinner"
      >
        <div class="irs-spinner-bar irs-spinner-bar-1 ${colorClass}"></div>
        <div class="irs-spinner-bar irs-spinner-bar-2 ${colorClass}"></div>
        <div class="irs-spinner-bar irs-spinner-bar-3 ${colorClass}"></div>
        <div class="irs-spinner-bar irs-spinner-bar-4 ${colorClass}"></div>
        <div class="irs-spinner-bar irs-spinner-bar-5 ${colorClass}"></div>
        <div class="irs-spinner-bar irs-spinner-bar-6 ${colorClass}"></div>
        <div class="irs-spinner-bar irs-spinner-bar-7 ${colorClass}"></div>
        <div class="irs-spinner-bar irs-spinner-bar-8 ${colorClass}"></div>
        <div class="irs-spinner-bar irs-spinner-bar-9 ${colorClass}"></div>
        <div class="irs-spinner-bar irs-spinner-bar-10 ${colorClass}"></div>
        <div class="irs-spinner-bar irs-spinner-bar-11 ${colorClass}"></div>
        <div class="irs-spinner-bar irs-spinner-bar-12 ${colorClass}"></div>
      </div>
    `
  }
}

window.customElements.define('irs-spinner', IrsSpinner);