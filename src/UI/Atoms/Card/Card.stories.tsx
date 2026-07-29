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
