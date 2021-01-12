import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Comprar = Template.bind({});
Comprar.args = {
  primary: true,
  label: 'Compralo yaaaaa!',
};

export const Informacion = Template.bind({});
Informacion.args = {
  label: 'Llámame!',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
