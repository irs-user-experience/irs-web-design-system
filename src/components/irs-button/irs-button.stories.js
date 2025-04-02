// (c) 2025 The MITRE Corporation.
import { html } from 'lit';
import {IrsButton} from './index';

export default {
  title: 'Components/Button',
  component: 'irs-button',
  argTypes: {
    accentStyle: {
      options: ['default', 'cool', 'warm'],
      control: { type: 'radio' },
    },
    size: {
      options: ['default', 'big'],
      control: { type: 'radio' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' },
    },
  }
};

const render = (args) => {
  return html`
    <div
      class="padding-1 display-inline-block"
      style=${args.inverse ? "background-color: #000000;" : ""}>
      <irs-button
        type=${args.type}
        ?secondary=${args.secondary}
        ?base=${args.base}
        accent-style=${args.accentStyle}
        ?outline=${args.outline} 
        ?inverse=${args.inverse}
        size=${args.size}
        ?unstyled=${args.unstyled}
        ?disabled=${args.disabled}>
        ${args.text}
      </irs-button>
    </div>
  `
}

export const Default = {
  render,
  args: {
    text: 'Default',
    type: 'button',
    secondary: false,
    base: false,
    accentStyle: undefined,
    outline: false,
    inverse: false,
    size: undefined,
    unstyled: false,
    disabled: false
  },
};

export const Secondary = {
  render,
  args: Object.assign({}, {...Default.args}, {secondary: true}),
};

export const Base = {
  render,
  args: Object.assign({}, {...Default.args}, {base: true}),
};

export const Cool = {
  render,
  args: Object.assign({}, {...Default.args}, {accentStyle: 'cool'}),
};

export const Warm = {
  render,
  args: Object.assign({}, {...Default.args}, {accentStyle: 'warm'}),
};

export const Outline = {
  render,
  args: Object.assign({}, {...Default.args}, {outline: true}),
};

export const OutlineInverse = {
  render,
  args: Object.assign({}, {...Default.args}, {inverse: true}),
};