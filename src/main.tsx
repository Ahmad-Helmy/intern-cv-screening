import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { enableMocksIfRequested } from "./mocks";

// Start MSW first (a no-op unless VITE_USE_MOCKS is set) so the very first
// requests the app fires are already intercepted, then mount.
enableMocksIfRequested().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
});
