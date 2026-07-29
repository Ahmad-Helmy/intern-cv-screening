import type { Meta, StoryObj } from "@storybook/react-vite";

import ProgressBar from "./Bar";

const meta = {
  title: "UI/Atoms/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    percentage: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Low: Story = {
  args: { percentage: 30 },
};

export const Mid: Story = {
  args: { percentage: 65 },
};

export const High: Story = {
  args: { percentage: 90 },
};
