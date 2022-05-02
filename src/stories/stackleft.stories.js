import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundcolor: 'red',
  label: 'Press Me',
  size: 'md',
};

export const Green = Template.bind({});
Green.args = {
  backgroundcolor: 'green',
  label: 'Press Me',
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  backgroundcolor: 'red',
  label: 'Press Me',
  size: 'sm',
};
