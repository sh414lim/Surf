import React from "react";
import { rest } from "msw";

export const handle = () => {
  rest.get("/lgoin", async (req, res, ctx) => {});
};
