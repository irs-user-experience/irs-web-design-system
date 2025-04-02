// (c) 2025 The MITRE Corporation.
import { html } from 'lit-html';
import { IrsFormErrorAlert } from './index';

export default {
  title: 'Components/Form Error Alert',
  tags: ['autodocs'],
  render: (args) => {
    const t = Template.bind({});
    t.args = args;
    return t;
  },
  argTypes: {
    headingLevel: {
      type: 'enum',
      control: 'radio',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    }
  }
}

const Template = (args) =>
html`
<irs-form-error-alert
  heading-level="${args.headingLevel}"
  .errors="${args.errors}"
></irs-form-error-alert>
`;

export const Default = Template.bind({});
Default.args = {
  headingLevel: 'h4',
  errors: [
    {
      fieldId: '#LastName',
      label: 'Label',
      message: 'Error message'
    },
    {
      fieldId: '#FirstName',
      label: 'Label',
      message: 'Error message'
    }
  ]
};