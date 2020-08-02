import { registerApplication, start } from "single-spa";

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

registerApplication({
  name: "@kombucha/create",
  app: () => System.import("@kombucha/create"),
  activeWhen: (location) => location.pathname.startsWith("/create"),
});

start({
  urlRerouteOnly: true,
});
