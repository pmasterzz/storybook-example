// YourComponent.stories.tsx
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { ButtonComponent } from './button.component';

// This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: ButtonComponent,
} as Meta;

const Template: Story<ButtonComponent> = (args) => ({
  component: ButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    label: 'Save',
};
