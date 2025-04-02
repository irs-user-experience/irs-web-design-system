// (c) 2025 The MITRE Corporation.
import { html } from 'lit';
import './index.js';

export default {
  title: 'Components/Checkbox',
  component: 'irs-checkbox',
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    value: { control: 'text' },
    tile: { control: 'boolean' },
    labelDescription: { control: 'text' },
    disabled: { control: 'boolean' }
  }
};

const Template = (args) => html`
  <irs-checkbox
    .name="${args.name}"
    .label="${args.label}"
    .value="${args.value}"
    ?tile="${args.tile}"
    .labelDescription="${args.labelDescription}"
    ?disabled="${args.disabled}"
    @checkbox-click="${(e) => console.log('Checkbox clicked:', e.detail.value)}"
  ></irs-checkbox>
`;

export const Default = Template.bind({});
Default.args = {
  name: 'checkbox',
  label: 'Checkbox',
  value: '',
  tile: false,
  labelDescription: 'This is a checkbox',
  disabled: false
};
