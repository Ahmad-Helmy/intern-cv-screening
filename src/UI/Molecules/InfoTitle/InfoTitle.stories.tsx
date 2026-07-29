import type { Meta, StoryObj } from "@storybook/react-vite";

import InfoTitle from "./InfoTitle";

const meta = {
  title: "UI/Molecules/InfoTitle",
  component: InfoTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InfoTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Education",
    value: "BSc Computer Science, University of Lisbon",
  },
};

export const ShortValue: Story = {
  args: {
    label: "Location",
    value: "Lisbon, Portugal",
  },
};
