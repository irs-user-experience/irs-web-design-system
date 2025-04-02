// (c) 2025 The MITRE Corporation.
import { html } from 'lit';
import { IrsBadge } from './index';

export default {
  title: 'Components/Badge',
  component: 'irs-badge'
};
  
const render = (args) => {
  return html`
    <irs-badge
      value=${args.value}
      hidden-message=${args.hiddenMessage}
    >
    </irs-badge>
  `
};

export const Default = {
  render,
  args: {
    value: 1,
    hiddenMessage: 'Notifications',
  }
};