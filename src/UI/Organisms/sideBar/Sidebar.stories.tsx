import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import { AuthProvider } from "../../../context/AuthProvider";
import Sidebar from "./Sidebar";

const meta = {
  title: "UI/Organisms/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  // the nav links are real anchors now, so they need a router in scope, and
  // the profile block reads useAuth — which throws without a provider
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/candidates"]}>
        <AuthProvider>
          <Story />
        </AuthProvider>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
