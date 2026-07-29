import type { Meta, StoryObj } from "@storybook/react-vite";

import ColoredNumber from "./ColoredNumber";

const meta = {
  title: "UI/Atoms/ColoredNumber",
  component: ColoredNumber,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: ["high", "mid", "low"],
    },
    size: {
      control: "radio",
      options: ["small", "large"],
    },
  },
} satisfies Meta<typeof ColoredNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const High: Story = {
  args: { score: 92, level: "high" },
};

export const Mid: Story = {
  args: { score: 68, level: "mid" },
};

export const Low: Story = {
  args: { score: 35, level: "low" },
};

export const Percent: Story = {
  args: { score: 87, level: "high", percent: true },
};

export const Small: Story = {
  args: { score: 74, level: "mid", size: "small" },
};

export const NoScore: Story = {
  args: { score: null },
};
