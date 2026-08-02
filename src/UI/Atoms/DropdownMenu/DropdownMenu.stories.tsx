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

const statusOptions = [
  { id: "imported", label: "Imported" },
  { id: "processing", label: "Processing" },
  { id: "evaluated", label: "Evaluated" },
  { id: "nominated", label: "Nominated" },
  { id: "rejected", label: "Rejected" },
];

export const Small: Story = {
  args: {
    size: "small",
    options: statusOptions,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    options: [
      { id: "frontend", label: "Frontend" },
      { id: "backend", label: "Backend" },
      { id: "fullstack", label: "Fullstack" },
      { id: "data", label: "Data" },
    ],
  },
};

export const WithSelection: Story = {
  args: {
    size: "small",
    options: statusOptions,
    selectedOption: "evaluated",
  },
};

export const Empty: Story = {
  args: { size: "small" },
};
