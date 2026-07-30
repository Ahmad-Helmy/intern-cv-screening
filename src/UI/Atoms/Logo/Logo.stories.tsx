import type { Meta, StoryObj } from "@storybook/react-vite";

import Logo from "./Logo";

const meta = {
  title: "UI/Atoms/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["login", "sidebar"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl", "2xl"],
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: { type: "login" },
};

export const SidebarVariant: Story = {
  args: { type: "sidebar", size: "lg" },
  decorators: [
    (Story) => (
      <div style={{ background: "var(--sidebar-bg)", padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};
