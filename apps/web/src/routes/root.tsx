import { Route, Router, RootRoute } from "@tanstack/react-router";
import z from "zod";
import { Dashboard } from "./dashboard";
import { Login } from "./login";

const rootRoute = new RootRoute();

const loginParamsSchema = z.object({
  token: z.string().catch(""),
});

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Login,
  validateSearch: loginParamsSchema,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/dasboard",
  component: Dashboard,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
