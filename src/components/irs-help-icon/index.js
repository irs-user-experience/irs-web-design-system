// (c) 2025 The MITRE Corporation.
import {LitElement } from 'lit';
import { html } from 'lit/static-html.js';
import { classMap } from 'lit/directives/class-map.js';

import _ from 'lodash';
import { helpIconStyles } from './irs-help-icon.css';
import sprite from 'assets/uswds/img/sprite.svg';

const highlightOff = `${sprite}#highlight_off`;
const helpOutline = `${sprite}#help_outline`;


export class IrsHelpIcon extends LitElement {

  static get properties() {
    return {
      isOpen: {type: Boolean, state: true},
      _internalId: {state: true},
    }
  }
  static styles=[helpIconStyles]

  constructor() {
    super();
    this._internalId = _.uniqueId();


  }

  handleClick() {
    this.isOpen = !this.isOpen;
  }

  getIcon() {
    if (this.isOpen) {
      return highlightOff;
    }
    return helpOutline;
  }

  render() {
    const classes={
      'irs-help-icon-content': true,
      'open': this.isOpen
    }
    return html`
      <div id="irs-help-icon-${this._internalId}" class="irs-help-icon-wrapper">
        <div class="irs-help-icon-label">
          <slot class=".font-body-md" name="label"></slot>
          <span @click=${this.handleClick} class="irs-help-icon-button text-primary">
          <svg
                role="img"
                class="usa-icon"
                aria-hidden={this.isOpen}
                aria-label="help icon"
              >
              <use href="${this.getIcon()}"></use>
              </svg>
          </span>
        </div>
        <div class="break"></div>
        <div
          class="${classMap(classes)}"
        >
          <slot class=".font-body-md" name="content"></slot>
        </div>
      </div>

    `
  }
}

window.customElements.define('irs-help-icon', IrsHelpIcon);