import React from 'react';
import { Icon } from './Icon';

// This default export determines where your story goes in the story list
export default {
  title: 'Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Checked = Template.bind({});
Checked.args = {
    primary: true,
    image: './media/bxs-check-circle.svg',
    label: 'checked icon'   
};

export const Trash = Template.bind({});
Trash.args = {
    image: './media/bxs-trash.svg',
    label: 'trash icon'  
};

// export const Hide = Template.bind({});
// Hide.args = {
//     image: './media/bxs-hide.svg' 
// };