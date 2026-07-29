import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter, Route, Routes } from "react-router";

import Title from "../Atoms/Title/Title";
import DefaultTemplate from "./DefaultTemplate";

const meta = {
  title: "UI/Templates/DefaultTemplate",
  component: DefaultTemplate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  // the template renders an <Outlet/> now, so it only makes sense inside a
  // route tree — the story provides a miniature one
  decorators: [
    () => (
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route element={<DefaultTemplate />}>
            <Route
              index
              element={<Title type="xlarge">Page content goes here</Title>}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof DefaultTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
