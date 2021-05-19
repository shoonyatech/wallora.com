import React from "react";
import { Story, Meta } from "@storybook/react";

import { ExampleButton, ExampleButtonProps } from "./ExampleButton";

export default {
  title: "Example/ExampleButton",
  component: ExampleButton,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as Meta;

const Template: Story<ExampleButtonProps> = (args) => (
  <ExampleButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button"
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button"
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button"
};
