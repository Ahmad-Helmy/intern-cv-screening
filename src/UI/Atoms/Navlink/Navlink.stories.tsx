import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

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
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <div style={{ background: "var(--sidebar-bg)", padding: 16, width: 220 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Candidates", icon: UsersIcon },
};

export const Active: Story = {
  args: { label: "Settings", icon: SettingsIcon, active: true },
};
