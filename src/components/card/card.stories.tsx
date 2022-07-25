import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Card, { CardProps } from ".";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Card",
  paragraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .",
};
