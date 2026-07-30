import type { Meta, StoryObj } from "@storybook/react-vite";

import Badge from "../../Atoms/Badge/Badge";
import Table from "./Table";

const meta = {
  title: "UI/Molecules/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = ["Name", "Status", "Score"];

export const Default: Story = {
  args: {
    columns,
    data: [
      {
        name: "Jane Doe",
        status: <Badge text="Evaluated" type="evaluated" />,
        score: 87,
      },
      {
        name: "John Smith",
        status: <Badge text="Nominated" type="nominated" />,
        score: 92,
      },
      {
        name: "Alex Costa",
        status: <Badge text="Processing" type="processing" />,
        score: 61,
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
  },
};
