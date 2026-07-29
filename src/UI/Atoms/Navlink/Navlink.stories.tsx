import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import UsersIcon from "../../../assets/icons/users.svg";
import SettingsIcon from "../../../assets/icons/settings.svg";
import NavLink from "./Navlink";

const meta = {
  title: "UI/Atoms/NavLink",
  component: NavLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context) => (
      // the active state comes from the current URL now, not from a prop, so
      // the story sets the URL instead of passing active
      <MemoryRouter initialEntries={[context.parameters.route ?? "/"]}>
        <div
          style={{ background: "var(--sidebar-bg)", padding: 16, width: 220 }}
        >
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Candidates", to: "/candidates", icon: UsersIcon },
};

export const Active: Story = {
  args: { label: "Settings", to: "/settings", icon: SettingsIcon },
  parameters: { route: "/settings" },
};
