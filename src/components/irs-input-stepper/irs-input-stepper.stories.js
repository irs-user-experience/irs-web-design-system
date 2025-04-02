// (c) 2025 The MITRE Corporation.
import { html } from 'lit';
import { IrsInputStepper } from './index';

export default {
  title: 'Components/Input Stepper',
  component: 'irs-input-stepper'
};

const render = (args) => {
  return html`
    <irs-input-stepper
      min=${args.min}
      max=${args.max}
      label=${args.label}
      input-description=${args.inputDescription}
      initial-value=${args.initialValue}
      ?required=${args.required}
      ?show-hint=${args.showHint}
    >
    </irs-input-stepper>
  `
};

export const Default = {
  render,
  args: {
    min: 0,
    max: 5,
    label: 'Number of days in office this week',
    inputDescription: 'days in office',
    initialValue: 1,
    required: true,
    showHint: true
  }
};