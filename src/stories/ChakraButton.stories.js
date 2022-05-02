import React from 'react';
import { Button } from '@chakra-ui/core';
import { action, actions } from '@storybook/addon-actions';

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: {
    variantColor: { control: 'text' },
    children: { control: 'text' },
  },
};

const Template = (args) => <Button {...args} />;

export const SuccessA = Template.bind();
SuccessA.args = {
  variantColor: 'green',
  children: 'sucess',
};

export const Success = () => (
  <Button onClick={action('Click handler')} variantColor='green'>
    Success
  </Button>
);
export const Danger = () => <Button variantColor='red'>Danger</Button>;
