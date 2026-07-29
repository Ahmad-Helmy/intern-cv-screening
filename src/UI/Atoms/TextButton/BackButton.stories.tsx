import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import BackButton from "./BackButton";

const meta = {
  title: "UI/Atoms/BackButton",
  component: BackButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Back" },
};

export const CustomLabel: Story = {
  args: { label: "Back to candidates" },
};
