// (c) 2025 The MITRE Corporation.
import { html } from 'lit';
import { IrsSelect } from './index';

export default {
  title: 'Components/Select',
  component: 'irs-select'
};

const render = (args) => {
    return html`
    <irs-select label=${args.label} ?disabled=${args.disabled} ?required=${args.required}>
      <option value="" selected>- Select -</option>
      <option value="value1">Option A</option>
      <option value="value2">Option B</option>
      <option value="value3">Option C</option>
    </irs-select>
  `
};

export const Default = {
  render,
  args: {
    label: 'Dropdown label',
    disabled: false,
    required: false,
  }
};