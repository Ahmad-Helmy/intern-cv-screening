import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter, Route, Routes } from "react-router";

import { AuthProvider } from "../../context/auth-context";
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
  // route tree — the story provides a miniature one. The Sidebar inside it
  // reads useAuth, hence the provider.
  decorators: [
    () => (
      <MemoryRouter initialEntries={["/"]}>
        <AuthProvider>
          <Routes>
            <Route element={<DefaultTemplate />}>
              <Route
                index
                element={<Title type="xlarge">Page content goes here</Title>}
              />
            </Route>
          </Routes>
        </AuthProvider>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof DefaultTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
