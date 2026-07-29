import type { Meta, StoryObj } from "@storybook/react-vite";

import { TableHeader } from "./TableHeader";

const meta = {
  title: "UI/Atoms/TableHeader",
  component: TableHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <table>
        <Story />
      </table>
    ),
  ],
} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: ["Name", "Status", "Score", "Actions"],
  },
};
