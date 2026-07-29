import type { Meta, StoryObj } from "@storybook/react-vite";

import BarTitle from "./BarTitle";

const meta = {
  title: "UI/Molecules/BarTitle",
  component: BarTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    percentage: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    type: {
      control: "select",
      options: ["xxlarge", "xlarge", "large", "medium", "small", "x-small"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "muted"],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BarTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "React", percentage: 80 },
};

export const LowScore: Story = {
  args: { label: "TypeScript", percentage: 35 },
};

export const MidScore: Story = {
  args: { label: "CSS", percentage: 60 },
};
