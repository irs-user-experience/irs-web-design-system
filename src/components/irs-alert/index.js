// (c) 2025 The MITRE Corporation.
import {LitElement, css, unsafeCSS} from 'lit';
import { html, literal, unsafeStatic } from 'lit/static-html.js';
import { classMap } from 'lit/directives/class-map.js';
import _ from 'lodash';

import style from '../../styles/styles.scss?inline'

import '@uswds/uswds/img/usa-icons/info.svg';
import '@uswds/uswds/img/usa-icons/check_circle.svg';
import '@uswds/uswds/img/usa-icons/warning.svg';
import '@uswds/uswds/img/usa-icons/error.svg';

export class IrsAlert extends LitElement {
  static get styles() {
    return css`${unsafeCSS(style)}`;
  }

  static get properties() {
    return {
      // 'success' | 'warning' | 'error' | 'info' | 'emergency'
      type: { type: String },

      // Text for the headnig
      heading: { type: String },

      // 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
      headingLevel: {
        type: String,
        attribute: 'heading-level',
      },

      slim: { type: Boolean },
      
      noIcon: {
        type: Boolean,
        attribute: 'no-icon',
      },

      validation: { type: Boolean },

      _internalId: {state: true}
    }
  }

  constructor() {
    super();

    this.type = 'success';
    this.heading = 'Foo';
    this.headingLevel = 'h4';
    this.slim = false;
    this.noIcon = false;
    this.validation = false;
    this._internalId = _.uniqueId();
  }

  render() {
    const classes = {
      'usa-alert': true,
      'usa-alert--info': this.type === 'info',
      'usa-alert--warning': this.type === 'warning',
      'usa-alert--success': this.type === 'success',
      'usa-alert--error': this.type === 'error',
      'usa-alert--emergency': this.type === 'emergency',
      'usa-alert--slim': this.slim,
      'usa-alert--no-icon': this.noIcon,
      'usa-alert--validation': this.validation,
    };

    // Must use a literal to set the heading tag dynamically
    const headingLevel = literal`${unsafeStatic(this.headingLevel)}`;

    return html`
      <div id="irs-alert-${this._internalId}" class=${classMap(classes)}>
        <div class="usa-alert__body">
          <${headingLevel} class="usa-alert__heading">${this.heading}</${headingLevel}>
          ${
            this.validation 
              ? html`<slot></slot>`
              : html`<p class="usa-alert__text"><slot></slot></p>`
          }
        </div>
      </div>
    `
  }
}

window.customElements.define('irs-alert', IrsAlert);