// (c) 2025 The MITRE Corporation.
import { html } from 'lit';
import './index.js';

export default {
  title: 'Components/Text Input',
  component: 'irs-text-input',
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    type: { control: 'radio', options: ['text', 'email', 'number', 'password', 'tel', 'url'] },
    validationStatus: { control: 'radio', options: ['default', 'error', 'success'] },
    inputSize: { control: 'radio', options: ['default', 'small', 'medium'] },
    label: { control: 'text' },
    hintText: { control: 'text' } 
  }
};

const Template = (args) => html`
  <irs-text-input
    .value="${args.value}"
    .placeholder="${args.placeholder}"
    ?disabled="${args.disabled}"
    .type="${args.type}"
    .validationStatus="${args.validationStatus}" 
    .inputSize="${args.inputSize}"
    .label="${args.label}"
    .hintText="${args.hintText}" 
    @input-change="${(e) => console.log('Input changed:', e.detail.value)}"
  ></irs-text-input>
`;

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Enter text',
  disabled: false,
  type: 'text',
  validationStatus: 'default',
  inputSize: 'default',
  label: 'Label',
  hintText: 'Hint text'
};