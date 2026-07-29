import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import PlusIcon from "../../../assets/icons/plus.svg";
import Button from "./Button";

const meta = {
  title: "UI/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "transparent", "ghost"],
    },
    icon: { control: false },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { text: "Primary", variant: "primary" },
};

export const Secondary: Story = {
  args: { text: "Secondary", variant: "secondary" },
};

export const Danger: Story = {
  args: { text: "Danger", variant: "danger" },
};

export const Ghost: Story = {
  args: { text: "Ghost", variant: "ghost" },
};

export const Transparent: Story = {
  args: { text: "Transparent", variant: "transparent" },
};

export const WithIcon: Story = {
  args: {
    text: "Add candidate",
    variant: "primary",
    icon: <img src={PlusIcon} alt="" />,
  },
};
