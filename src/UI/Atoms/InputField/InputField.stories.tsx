import { useState } from "react";
import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import InputField from "./InputField";

const meta = {
  title: "UI/Atoms/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

function ControlledInputField(props: ComponentProps<typeof InputField>) {
  const [value, setValue] = useState(props.value);
  return (
    <InputField
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export const Default: Story = {
  args: {
    name: "Full name",
    placeholder: "Enter the candidate's name",
    value: "",
  },
  render: (args) => <ControlledInputField {...args} />,
};

export const Filled: Story = {
  args: {
    name: "Email",
    placeholder: "Enter an email",
    value: "jane.doe@example.com",
  },
  render: (args) => <ControlledInputField {...args} />,
};
