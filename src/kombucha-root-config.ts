import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

console.log("Loading Kombucha Root Config");

setTimeout(() => {
  // window.history.pushState({}, "", "/settings");
}, 3000);

// registerApplication({
//   name: "@kombucha/navbar",
//   app: () => System.import("@kombucha/navbar"),
//   activeWhen: isActive.navbar,
// });

registerApplication({
  name: "@kombucha/products",
  app: () => System.import("@kombucha/products"),
  activeWhen: (location) => location.pathname.startsWith("/products"),
});

registerApplication({
  name: "@kombucha/settings",
  app: () => System.import("@kombucha/settings"),
  // activeWhen: (location) => location.pathname === "/",
  activeWhen: (location) => location.pathname.startsWith("/settings"),
});

start({
  urlRerouteOnly: true,
});
