import type { Meta, StoryObj } from "@storybook/react-vite";

import Badge from "../Badge/Badge";
import { TableRow } from "./TableRow";

const meta = {
  title: "UI/Atoms/TableRow",
  component: TableRow,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      name: "Jane Doe",
      status: "Evaluated",
      score: 87,
    },
  },
};

export const WithBadge: Story = {
  args: {
    data: {
      name: "John Smith",
      status: <Badge text="Nominated" type="nominated" />,
      score: 92,
    },
  },
};
