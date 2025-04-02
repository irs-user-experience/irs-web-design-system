// (c) 2025 The MITRE Corporation.
import { html } from 'lit';
import { IrsHelpIcon } from './index';

export default {
  title: 'Components/Help Icon',
  component: 'irs-help-icon'
};
  
const render = (args) => {
  return html`
    <irs-help-icon>
      <span slot="label">${args.label}</span>
      <span slot="content">${args.content}</span>
    </irs-help-icon>
  `
};

export const Default = {
  render,
  args: {
    label: 'Help Icon Label',
    content: 'Help Icon Content'
  }
};  