/**
 * Starts Mock Service Worker when the app runs with mocks enabled.
 *
 * Enabled via the VITE_USE_MOCKS flag, which lives in .env.development and is
 * therefore only picked up by `npm run start-with-mocks`. When off, this is a
 * no-op and the app talks to the real backend at VITE_API_URL as usual.
 */
export const enableMocksIfRequested = async (): Promise<void> => {
  if (import.meta.env.VITE_USE_MOCKS !== "true") return;

  const { worker } = await import("./browser");
  await worker.start({
    // Don't warn about real requests we intentionally don't mock (e.g. assets).
    onUnhandledRequest: "bypass",
    quiet: false,
  });

  console.info(
    "[mocks] Mock Service Worker started — UI is serving mock data.",
  );
};
