import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "./Card";

const meta = {
  title: "UI/Atoms/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3>Card title</h3>
        <p>Any content can go inside a card.</p>
      </div>
    ),
  },
};

export const TableCard: Story = {
  args: {
    isTable: true,
    children: (
      <div>
        <h3>Table card</h3>
        <p>Variant used to wrap tables.</p>
      </div>
    ),
  },
};
