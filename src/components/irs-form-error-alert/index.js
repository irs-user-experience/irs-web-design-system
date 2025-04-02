// (c) 2025 The MITRE Corporation.
import {LitElement, css, unsafeCSS} from 'lit';
import { html, literal, unsafeStatic } from 'lit/static-html.js';
import _ from 'lodash';



import style from '../../styles/styles.scss?inline'

import '@uswds/uswds/img/usa-icons/info.svg';
import '@uswds/uswds/img/usa-icons/check_circle.svg';
import '@uswds/uswds/img/usa-icons/warning.svg';
import '@uswds/uswds/img/usa-icons/error.svg';

export class IrsFormErrorAlert extends LitElement {
  static get styles() {
    return css`${unsafeCSS(style)}`;
  }

  

  static get properties() {
    return {
      headingLevel: {
        type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
        attribute: 'heading-level',
      },
      errors: {
        type: Array
      },
      _internalId: {
        state: true
      }
    }
  }

  constructor() {
    super();

    this.headingLevel = 'h4';
    this.errors = [];
    this._internalId = _.uniqueId();
  }

  render() {

    // Must use a literal to set the heading tag dynamically
    const headingLevel = literal`${unsafeStatic(this.headingLevel)}`;

    return  html`
    <div id="irs-form-error-alert-${this._internalId}" class='usa-alert usa-alert--error' aria-atomic='true'>
        
        <div class="usa-alert__body">
        <${headingLevel} class="usa-alert__heading">
            ${this.errors.length > 1 ? 'The following ' + this.errors.length + ' errors have occurred:' : 'The following error has occurred:'}
        </${headingLevel}>

        ${this.errors.map((error) => {
                return html`
                <li key=${error.fieldId}>
                    <a class='usa-link' href='${error.fieldId}'>
                        ${error.label}: ${error.message}
                    </a>
                </li>`
            })}
        </div>  
    </div>`

  }

}

window.customElements.define('irs-form-error-alert', IrsFormErrorAlert);