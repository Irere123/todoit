import { RootRoute, Route, Router } from "@tanstack/react-router";

import { Index } from "./login";
import { Dashboard } from "./dashboard";

const rootRoute = new RootRoute();

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "dashboard",
  component: Dashboard,
});

const routeTree = rootRoute.addChildren([indexRoute, dashboardRoute]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
