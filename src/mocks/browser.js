import { setupWorker } from "msw";
import { handle } from "./handle";

export const worker = setupWorker(...handle);
