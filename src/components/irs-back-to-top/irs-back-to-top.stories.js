// (c) 2025 The MITRE Corporation.
import { html } from 'lit';
import { IrsBackToTop } from './index';

export default {
  title: 'Components/Back To Top',
  component: 'irs-back-to-top'
};

const render = (args) => {
  return html`
    <irs-back-to-top
      ?icon-only=${args.iconOnly}
      label=${args.label}
      ?relative=${args.relative}
    >
    </irs-back-to-top>
  `
};

export const Default = {
  render,
  args: {
    iconOnly: false,
    label: 'Return to top',
    relative: true
  }
};