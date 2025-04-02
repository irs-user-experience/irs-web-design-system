// (c) 2025 The MITRE Corporation.
import { LitElement, html } from 'lit';
import { tabViewStyles } from './irs-tab-view.css';
import { classMap } from 'lit/directives/class-map.js';
import _ from 'lodash';

export class IrsTabView extends LitElement {
  static properties = {
    _activeIndex: {state: true},
    _disabledTabs: {state: true},
    _focusTabs: {state: true},
    _internalId: {state: true}
  };

  static styles = [tabViewStyles];

  constructor() {
    super();
    this._activeIndex = 0;
    this._disabledTabs = [];
    this._focusTabs = false;
    this._internalId = _.uniqueId();
  }

  updated() {
    const activeTab = this.renderRoot.getElementById(`tab-button-${this._internalId}-${this._activeIndex}`);
    
    // The first active tab shouldn't be focused the first time the component renders, so I added this
    // flag to track whether the tabs are allowed to be focused or not. It starts out false when the
    // component first renders, but turns true (and remains true) after the user clicks on another tab
    // for the first time.
    if (this._focusTabs) {
      activeTab.focus();
    }

    // Note: even though the tabs already get automatically focused when you click on them, they don't
    // get automatically focused when you navigate them with the arrow keys, so this focusing logic is
    // necessary for the keydown functionality to work properly.
  }

  // find the index of the next tab that isn't disabled
  _nextValidTab(index) {
    let nextTab = null;
    let i = index;

    while (nextTab === null) {
      i += 1;

      if (i === this._disabledTabs.length) {
        i = 0;
      }

      if (this._disabledTabs[i] === false) {
        nextTab = i;
      }
    }

    return nextTab;
  };

  // find the index of the previous tab that isn't disabled
  _previousValidTab(index) {
    let previousTab = null;
    let i = index;

    while (previousTab === null) {
      i -= 1;

      if (i === -1) {
        i = this._disabledTabs.length - 1;
      }

      if (this._disabledTabs[i] === false) {
        previousTab = i;
      }
    }

    return previousTab;
  };

  _handleKeydown(event) {
    const index = parseInt(event.target.getAttribute('key'));
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this._activeIndex = this._nextValidTab(index);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      this._activeIndex = this._previousValidTab(index);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      this._activeIndex = this._previousValidTab(index);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      this._activeIndex = this._nextValidTab(index);
    }
  }

  _selectTab(event) {
    const selectedTab = event.target;
    this._activeIndex = parseInt(selectedTab.getAttribute('key'));
    this._focusTabs = true;
  }

  render() {
    const tabs = [];
    const panels = [];
    this._disabledTabs = [];

    for (var i = 0; i < this.children.length; i++) {
      let isActive = i === this._activeIndex;
      let label = this.children[i].label;
      let isDisabled = this.children[i].disabled === 'true';
      
      if (isDisabled) {
        this._disabledTabs.push(true);
      } else {
        this._disabledTabs.push(false);
      }
      
      let classes = {
        'usa-button--unstyled': true,
        'tab': true,
        'disabled': isDisabled
      };

      tabs.push(html`
        <button
          aria-selected=${isActive}
          id="tab-button-${this._internalId}-${i}"
          class="${classMap(classes)}"
          @click=${isDisabled ? null : this._selectTab}
          @keydown=${isDisabled ? null : this._handleKeydown}
          ?disabled=${isDisabled}
          data-component="Tab"
          tab-index=${isActive ? "0" : "-1"}
          key="${i}"
        >
          ${label}
        </button>
      `);

      const panel = document.createElement('div');

      panel.setAttribute('id', `tab-panel-${this._internalId}`);
      panel.setAttribute('class', 'tabPanel');
      panel.setAttribute('data-component', 'TabPanel');
      panel.setAttribute('tab-index', '0');
      panel.setAttribute('key', `${i}`);
      panel.innerHTML = this.children[i].innerHTML;

      panels.push(panel);
    }

    return html`
      <div data-component="Tabs" id="tabs-${this._internalId}" class="tabs">
        <div class="wrapper">
          <div data-component="TabList" id="tab-list-${this._internalId}" class="tabList">
            ${tabs}
          </div>
        </div>
        <div data-component="TabPanels" id="tab-panels-${this._internalId}" class="tabPanels">
          ${panels[this._activeIndex]}
        </div>
      </div>
    `
  }
}

window.customElements.define('irs-tab-view', IrsTabView);