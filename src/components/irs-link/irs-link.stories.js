// (c) 2025 The MITRE Corporation.
import { html, nothing } from 'lit';
import { IrsLink } from './index';

export default {
  title: 'Components/Link',
  component: 'irs-link',
};
  
const render = (args) => {
  return html`
    <div class=${args.alt ? "padding-1 display-inline-block usa-dark-background" : nothing}>
      <irs-link
        href=${args.href}
        ?external=${args.external}
        ?alt=${args.alt}>
        ${args.label}
      </irs-link>
    </div>
  `
};

export const Default = {
  render,
  args: {
    label: 'Official IRS website',
    href: 'https://irs.gov',
    external: true,
    alt: false
  }
};