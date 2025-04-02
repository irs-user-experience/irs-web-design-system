// (c) 2025 The MITRE Corporation.
import { LitElement, html } from 'lit';
import { tabViewStyles } from './irs-tab-view.css';

export class IrsTab extends LitElement {
  static properties = {
    label: {type: String},
    disabled: {type: String}
  };

  static styles = [tabViewStyles];

  constructor() {
    super();
    this.label = 'Default';
    this.disabled = "false";
  }

  render() {
    return html`<div class="tab" aria-label="${this.label}"></div>`
  }
}

window.customElements.define('irs-tab', IrsTab);