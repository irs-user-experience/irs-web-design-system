// (c) 2025 The MITRE Corporation.
import { LitElement, html, nothing } from 'lit';
import { searchStyles } from './irs-search.css';
import _ from 'lodash';

import icon from 'assets/uswds/img/usa-icons-bg/search--white.svg';

import { ifDefined } from 'lit-html/directives/if-defined.js';

var languagesMap = {
  'en': 'Search',
  'es': 'Buscar'
};

export class IrsSearch extends LitElement {
  static styles=[searchStyles];

  static get properties() {
    return {
      // Props
      size: {
        type: 'big' | 'small' | 'default'
      },
      language: {
        type: 'en' | 'es'
      },
      buttonBgColor: {
        type: 'primary' | 'primary-dark' | 'primary-darker',
        attribute: 'button-bg-color'
      },
      buttonAriaLabel: {
        type: String,
        attribute: 'button-aria-label'
      },
      placeholder: {
        type: String
      },
      // States
      _internalId: {
        state: true
      },
    }
  }

  constructor() {
    super();

    this.size = 'default';
    this.language = 'en';
    this.buttonBgColor = 'primary';
    this._internalId = _.uniqueId();
  }

  triggerSubmit(e) {
    e.preventDefault();
    const event = new CustomEvent('search', {
      bubbles: true,
      composed: true,
      detail: {
        keyword: e.target.querySelector('input.usa-input')?.value
      }
    });
    this.dispatchEvent(event);
  }

  render() {
    let sizeClass = '';
    if (this.size === 'small') {
      sizeClass = 'usa-search--small';
    }
    else if (this.size === 'big') {
      sizeClass = 'usa-search--big';
    }

    let bgClass = `bg-${this.buttonBgColor}`;
    
    return html`
      <form class="usa-search ${sizeClass}" role="search" @submit="${this.triggerSubmit}">
        <label
          class="usa-sr-only"
          for="search-field-${this._internalId}">
          ${languagesMap[this.language]}
        </label>
        <input
          class="usa-input"
          id="search-field-${this._internalId}"
          type="search"
          name="search"
          placeholder="${this.placeholder || nothing}"
        />
        <!-- TODO: replace this with irs-button? -->
        <button
          class="usa-button ${bgClass}"
          type="submit"
          aria-label="${this.buttonAriaLabel || nothing}"
        >
          ${
            this.size === 'small' ?
            '' :
            html`<span class="usa-search__submit-text">${languagesMap[this.language]}</span>`
          }
          <img
            src=${icon}
            class="usa-search__submit-icon"
            alt="${languagesMap[this.language]}"
          />
        </button>
      </form>
    `
  }
}

window.customElements.define('irs-search', IrsSearch);