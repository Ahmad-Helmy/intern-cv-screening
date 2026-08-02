import type { Meta, StoryObj } from "@storybook/react-vite";

import BriefcaseIcon from "../../../assets/icons/briefcase.svg";
import Title from "../../Atoms/Title/Title";
import CardInfo from "./CardInfo";

const meta = {
  title: "UI/Molecules/CardInfo",
  component: CardInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Experience",
    children: <p>Frontend intern at Novabase, summer 2025.</p>,
  },
};

export const WithIcon: Story = {
  args: {
    title: "Experience",
    icon: <img src={BriefcaseIcon} alt="" />,
    children: <p>Frontend intern at Novabase, summer 2025.</p>,
  },
};

export const CustomTitle: Story = {
  args: {
    title: (
      <Title type="large" variant="secondary">
        Custom title node
      </Title>
    ),
    children: <p>The title prop also accepts any ReactNode.</p>,
  },
};
