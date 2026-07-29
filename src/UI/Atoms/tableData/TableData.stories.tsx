import type { Meta, StoryObj } from "@storybook/react-vite";

import { TableData } from "./TableData";

const meta = {
  title: "UI/Atoms/TableData",
  component: TableData,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <tr>
            <Story />
          </tr>
        </tbody>
      </table>
    ),
  ],
} satisfies Meta<typeof TableData>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Cell content" },
};
