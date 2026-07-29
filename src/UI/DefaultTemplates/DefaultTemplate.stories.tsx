import type { Meta, StoryObj } from "@storybook/react-vite";

import Title from "../Atoms/Title/Title";
import DefaultTemplate from "./DefaultTemplate";

const meta = {
  title: "UI/Templates/DefaultTemplate",
  component: DefaultTemplate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DefaultTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Title type="xlarge">Page content goes here</Title>,
  },
};
