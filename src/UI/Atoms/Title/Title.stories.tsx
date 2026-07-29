import type { Meta, StoryObj } from "@storybook/react-vite";

import Title from "./Title";

const sizes = [
  "xxlarge",
  "xlarge",
  "large",
  "medium",
  "small",
  "x-small",
] as const;

const meta = {
  title: "UI/Atoms/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: sizes,
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "muted"],
    },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { type: "medium", children: "Primary title" },
};

export const Secondary: Story = {
  args: { type: "medium", children: "Secondary title", variant: "secondary" },
};

export const Muted: Story = {
  args: { type: "medium", children: "Muted title", variant: "muted" },
};

export const AllSizes: Story = {
  args: { type: "medium", children: "Title" },
  render: () => (
    <div>
      {sizes.map((size) => (
        <Title key={size} type={size}>
          {`Title ${size}`}
        </Title>
      ))}
    </div>
  ),
};
