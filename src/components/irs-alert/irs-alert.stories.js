// (c) 2025 The MITRE Corporation.
import { html } from 'lit';
import { IrsAlert } from './index';

export default {
  title: 'Components/Alert',
  component: 'irs-alert',
  argTypes: {
    type: {
      options: ['info', 'success', 'warning', 'error', 'emergency'],
      control: { type: 'radio' },
    },
  }
};

const render = (args) => {
  return html`
    <irs-alert type=${args.type} heading=${args.heading} headingLevel=${args.headingLevel}
      ?slim=${args.slim} ?no-icon=${args.noIcon} ?validation=${args.validation}>
      ${args.text}
    </irs-alert>
  `
}

export const Info = {
  render,
  args: {
    type: 'info',
    text: 'I am text inside the alert',
    heading: 'I am a heading!',
    headingLevel: 'h4',
    slim: false,
    noIcon: false,
    validation: false,
  },
};

export const Success = {
  render,
  args: Object.assign({}, {...Info.args}, { type: 'success' }),
};

export const Warning = {
  render,
  args: Object.assign({}, {...Info.args}, { type: 'warning' }),
};

export const Error = {
  render,
  args: Object.assign({}, {...Info.args}, { type: 'error' }),
};

export const Emergency = {
  render,
  args: Object.assign({}, {...Info.args}, { type: 'emergency' }),
};

export const NoType = {
  render,
  args: Object.assign({}, {...Info.args}, { type: undefined }),
};