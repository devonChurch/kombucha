import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

// registerApplication({
//   name: "@kombucha/navbar",
//   app: () => System.import("@kombucha/navbar"),
//   activeWhen: isActive.navbar,
// });

registerApplication({
  name: "@kombucha/products",
  app: () => System.import("@kombucha/products"),
  activeWhen: (location) =>
    location.pathname === "/" ||
    ["/purchases"].some((path) => location.pathname.startsWith(path)),
});

registerApplication({
  name: "@kombucha/settings",
  app: () => System.import("@kombucha/settings"),
  activeWhen: (location) => location.pathname.startsWith("/settings"),
});

start({
  urlRerouteOnly: true,
});
