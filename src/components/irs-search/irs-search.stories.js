// (c) 2025 The MITRE Corporation.
import { html } from 'lit';
import { IrsSearch } from './index';

export default {
  title: 'Components/Search',
  component: 'irs-search',
  argTypes: {
    size: {
      options: ['big', 'small', 'default'],
      control: { type: 'radio' }
    },
    language: {
      options: ['en', 'es'],
      control: { type: 'radio' }
    },
    buttonBgColor: {
      options: ['primary', 'primary-dark', 'primary-darker'],
      control: { type: 'radio' }
    },
    buttonAriaLabel: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    }
  }
};

const render = (args) => {
  return html`
    <irs-search
      .size=${args.size}
      .language=${args.language}
      button-bg-color=${args.buttonBgColor}
      button-aria-label=${args.buttonAriaLabel}
      placeholder=${args.placeholder}
    >
    </irs-search>
  `
};

export const Default = {
  render,
  args: {
    size: 'default',
    language: 'en',
    buttonBgColor: 'primary',
    placeholder: 'Placeholder goes here'
  }
};