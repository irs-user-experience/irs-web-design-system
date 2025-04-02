// (c) 2025 The MITRE Corporation.
import { html } from 'lit';
import { IrsSpinner } from './index';

export default {
  title: 'Components/Spinner',
  component: 'irs-spinner',
  argTypes: {
    color: {
      type: 'enum',
      control: 'radio',
      options: ['primary', 'dark', 'light']
    },
    size: {
      type: 'enum',
      control: 'radio',
      options: ['small', 'medium', 'large']
    }
  }
};

const render = (args) => {
  return html`
    <irs-spinner
      color="${args.color}"
      size="${args.size}"
    ></irs-spinner>
  `
};


export const Default = {
  render,
  args: {
    color: 'primary',
    size: 'medium',
  }
};