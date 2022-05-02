import Button from '../components/Button';
import React from 'react';
import Center from '../components/Center/Center';
import { action, actions } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [(story) => <Center>{story()}</Center>],
  args: {
    children: 'Button',
  },
  //argTypes: { handleClick: { action: "handleClick" } },
};

export const Primary = () => (
  <Button onClick={action('Click handler')} variant='primary' placeholder='primary'>
    Primary-One
  </Button>
);

export const Secondary = () => (
  <Button {...actions('onClick', 'onMouseOver')} variant='secondary' placeholder='secondary'>
    Secondary-One
  </Button>
);

export const Success = () => (
  <Button variant='success' placeholder='success'>
    Success
  </Button>
);

export const Danger = () => (
  <Button variant='danger' placeholder='danger'>
    Danger
  </Button>
);

const Template = (args) => <Button {...args}></Button>;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: 'primary',
  children: 'Primary Args',
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  // children: 'Long Primary Args',
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: 'secondary',
  //children: 'Secondary Args',
};

export const Log = () => <Button onClick={() => console.log('Button Clicked', process.env.STORYBOOK_THEME)}>Log</Button>;

// export const Knobs = () => <Button disabled={boolean('Disabled', false)}>{text('Label', 'Button Label')}</Button>;
// const Template = args => <Button {...args} />

// export const Red = Template.bind({})
// Red.args = {
//   backgroundColor: "red",
//   label: "Press Me",
//   size: "md",
// }

// export const Green = Template.bind({})
// Green.args = {
//   backgroundColor: "green",
//   label: "Press Me",
//   size: "md",
// }

// export const Small = Template.bind({})
// Small.args = {
//   backgroundColor: "red",
//   label: "Press Me",
//   size: "sm",
// }

// export const Large = Template.bind({})
// Large.args = {
//   backgroundColor: "red",
//   label: "Press Me",
//   size: "lg",
// }

// export const LongLabel = Template.bind({})
// LongLabel.args = {
//   backgroundColor: "red",
//   label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
//   size: "md",
// }
