import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

/** MSW worker that intercepts API calls in the browser when mocks are enabled. */
export const worker = setupWorker(...handlers);
