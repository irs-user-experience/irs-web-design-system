// (c) 2025 The MITRE Corporation.
import { html } from 'lit';
import { IrsBanner } from './index';

export default {
  title: 'Components/Banner',
  component: 'irs-banner',
  argTypes: {
    language: {
      type: 'enum',
      control: 'radio',
      options: ['en', 'es']
    },
    tld: {
      type: 'enum',
      control: 'radio',
      options: ['gov', 'mil']
    }
  }
};
  
const render = (args) => {
  return html`
    <irs-banner
      lang=${args.language}
      tld=${args.tld}
    >
    </irs-banner>
  `
};

export const Default = {
  render,
  args: {
    language: 'en',
    tld: 'gov'
  }
};