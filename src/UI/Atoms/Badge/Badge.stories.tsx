import type { Meta, StoryObj } from "@storybook/react-vite";

import Badge from "./Badge";

const meta = {
  title: "UI/Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: [
        "imported",
        "processing",
        "evaluated",
        "nominated",
        "rejected",
        "skill",
        "default",
      ],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { text: "Default" },
};

export const Imported: Story = {
  args: { text: "Imported", type: "imported" },
};

export const Processing: Story = {
  args: { text: "Processing", type: "processing" },
};

export const Evaluated: Story = {
  args: { text: "Evaluated", type: "evaluated" },
};

export const Nominated: Story = {
  args: { text: "Nominated", type: "nominated" },
};

export const Rejected: Story = {
  args: { text: "Rejected", type: "rejected" },
};

export const Skill: Story = {
  args: { text: "React", type: "skill" },
};
