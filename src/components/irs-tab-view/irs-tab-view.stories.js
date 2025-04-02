// (c) 2025 The MITRE Corporation.
import { html } from 'lit';
import { IrsTabView } from './irs-tab-view.index';
import { IrsTab } from './irs-tab.index';

export default {
  title: 'Components/Tab View',
  component: 'irs-tab-view'
};

const render = () => {
  return html`
    <irs-tab-view>
      <irs-tab label="First tab">
        <i>Tab 1 content</i>
      </irs-tab>
      <irs-tab label="Second tab">
        <strong>Tab 2 content</strong>
      </irs-tab>
      <irs-tab label="Third tab">
        <u>Tab 3 content</u>
      </irs-tab>
      <irs-tab label="Fourth tab" disabled="true">
        Tab 4 content
      </irs-tab>
      <irs-tab label="Fifth tab">
        Tab 5 content
      </irs-tab>
    </irs-tab-view>
  `
};

export const Default = { render };