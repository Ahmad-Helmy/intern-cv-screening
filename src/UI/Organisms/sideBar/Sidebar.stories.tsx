import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import Sidebar from "./Sidebar";

const meta = {
  title: "UI/Organisms/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  // the nav links are real anchors now, so they need a router in scope
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/candidates"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
