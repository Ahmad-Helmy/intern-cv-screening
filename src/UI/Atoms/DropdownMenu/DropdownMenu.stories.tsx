import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import DropdownMenu from "./DropdownMenu";

const meta = {
  title: "UI/Atoms/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "large"],
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    options: ["Imported", "Processing", "Evaluated", "Nominated", "Rejected"],
  },
};

export const Large: Story = {
  args: {
    size: "large",
    options: ["Frontend", "Backend", "Fullstack", "Data"],
  },
};

export const Empty: Story = {
  args: { size: "small" },
};
