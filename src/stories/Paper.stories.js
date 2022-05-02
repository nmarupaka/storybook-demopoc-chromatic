import React from 'react';
import Paper from '../components/Paper';

export default {
  title: 'Components/Paper',
  component: Paper,
  argTypes: {
    numberOfChildren: { type: 'number', defaultValue: 1 },
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Paper {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundcolor: '#003668',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {n + 1}
      </div>
    ))}
  </Paper>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'row',
  spacing: 2,
  wrap: false,
};
