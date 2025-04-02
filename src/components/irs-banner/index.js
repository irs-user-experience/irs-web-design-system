// (c) 2025 The MITRE Corporation.
import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { classMap } from 'lit/directives/class-map.js';

import { bannerStyles } from './irs-banner.css';

import usFlagSmall from "@uswds/uswds/img/us_flag_small.png";
import iconDotGov from "@uswds/uswds/img/icon-dot-gov.svg";
import iconHttps from "@uswds/uswds/img/icon-https.svg";

import _ from 'lodash';

export class IrsBanner extends LitElement {
  static properties = {
    lang: {
      type: String,
      reflect: true
    },
    data: {
      attribute: false
    },
    isOpen: {
      type: Boolean
    },
    label: {
      type: String
    },
    tld: {
      type: String,
      reflect: true
    },
    _internalId: {
      state: true
    }
  };

  static styles = [bannerStyles];

  toggle() {
    this.isOpen = !this.isOpen;
    this.shadowRoot.querySelector('.usa-banner__content').toggleAttribute('hidden');
  }

  constructor() {
    super();
    this.lang = 'en';
    this.isOpen = false;
    this.tld = 'gov';
    this._internalId = _.uniqueId();
    this.data = {
      en: {
        banner: {
          label: "Official website of the United States government",
          text: "An official website of the United States government",
          action: "Here's how you know",
        },
        domain: {
          heading: "Official websites use",
          gov: "A <strong>.gov</strong> website belongs to an official government organization in the United States.",
          mil: "A <strong>.mil</strong> website belongs to an official U.S. Department of Defense organization.",
        },
        https: {
          heading1: "Secure",
          heading2: "websites use HTTPS",
          text1: "A <strong>lock</strong>",
          text2:
            "or <strong>https://</strong> means you’ve safely connected to the",
          text3:
            " website. Share sensitive information only on official, secure websites.",
        },
      },
      es: {
        banner: {
          label: "Un sitio oficial del Gobierno de Estados Unidos",
          text: "Un sitio oficial del Gobierno de Estados Unidos",
          action: "Así es como usted puede verificarlo",
        },
        domain: {
          heading: "Los sitios web oficiales usan",
          gov: "Un sitio web <strong>.gov</strong> pertenece a una organización oficial del Gobierno de Estados Unidos.",
          mil: "Un sitio web <strong>.mil</strong> pertenece a una organización oficial del Departamento de Defensa de EE. UU.",
        },
        https: {
          heading1: "Los sitios web seguros",
          heading2: "usan HTTPS",
          text1: "Un <strong>candado</strong>",
          text2:
            "o <strong>https://</strong> significa que usted se conectó de forma segura a un sitio web",
          text3:
            ". Comparta información sensible sólo en sitios web oficiales y seguros.",
        },
      },
    };
  }

  // Get English or Spanish strings.
  // Default to English if an unknown `lang` is passed. Example: <irs-banner lang="zy"></irs-banner>
  get _bannerText() {
    const content = this.data[this.lang] || this.data["en"];
    return content;
  }

  // Get the action text and use for both mobile & desktop buttons.
  get _actionText() {
    const bannerActionText = this.querySelector('[slot="banner-action"]');
    return bannerActionText?.textContent;
  }

  lockIcon() {
    return html`
      <span
        class="usa-banner__icon-lock"
        role="img"
        aria-label="Locked padlock icon"
        part="lock-icon"
      ></span>
    `;
  }

  domainTemplate(tld) {
    const { domain } = this._bannerText;

    return html`
      <img
        class="usa-banner__icon usa-media-block__img"
        src="${iconDotGov}"
        role="img"
        alt=""
        aria-hidden="true"
      />
      <div class="usa-media-block__body">
        <p>
          <strong>
            <slot name="domain-heading"> ${domain.heading} .${tld} </slot>
          </strong>
          <br />
          <slot name="domain-text">
            ${tld === 'gov' ? unsafeHTML(domain.gov) : unsafeHTML(domain.mil)}
          </slot>
        </p>
      </div>
    `;
  }

  httpsTemplate(tld) {
    const { https } = this._bannerText;

    return html`
      <img
        class="usa-banner__icon usa-media-block__img"
        src="${iconHttps}"
        role="img"
        alt=""
        aria-hidden="true"
      />
      <div class="usa-media-block__body">
        <p>
          <strong>
            <slot name="https-heading">
              ${https.heading1} .${tld} ${https.heading2}
            </slot> </strong
          ><br />
          <slot name="https-text">
            ${unsafeHTML(https.text1)} (${this.lockIcon()})
            ${unsafeHTML(https.text2)} .${tld}${https.text3}
          </slot>
        </p>
      </div>
    `;
  }

  render() {
    const classes = { ["usa-banner__header--expanded"]: this.isOpen };
    const tld = this.tld === "mil" ? "mil" : "gov";
    const { banner } = this._bannerText;

    return html`
      <section class="usa-banner" aria-label=${this.label || banner.label} id="irs-banner-${this._internalId}">
        <div class="usa-accordion">
          <header class="usa-banner__header ${classMap(classes)}">
            <div class="usa-banner__inner">
              <div class="grid-col-auto">
                <img
                  aria-hidden="true"
                  class="usa-banner__header-flag"
                  src=${usFlagSmall}
                  alt=""
                />
              </div>
              <div
                class="grid-col-fill tablet:grid-col-auto"
                aria-hidden="true"
              >
                <p class="usa-banner__header-text">
                  <slot name="banner-text">${banner.text}</slot>
                </p>
                <p class="usa-banner__header-action">
                  <slot name="banner-action">${banner.action}</slot>
                </p>
              </div>
              <button
                type="button"
                class="usa-accordion__button usa-banner__button"
                aria-expanded="${this.isOpen}"
                aria-controls="irs-banner-content-${this._internalId}"
                @click="${this.toggle}"
              >
                <span class="usa-banner__button-text">
                  ${this._actionText || banner.action}
                </span>
              </button>
            </div>
          </header>
          <div class="usa-banner__content usa-accordion__content" id="irs-banner-content-${this._internalId}" hidden>
            <div class="grid-row grid-gap-lg">
              <div class="usa-banner__guidance tablet:grid-col-6">
                ${this.domainTemplate(tld)}
              </div>
              <div class="usa-banner__guidance tablet:grid-col-6">
                ${this.httpsTemplate(tld)}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('irs-banner', IrsBanner);