import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

console.log("Loading Kombucha Root Config");

// registerApplication({
//   name: "@kombucha/navbar",
//   app: () => System.import("@kombucha/navbar"),
//   activeWhen: isActive.navbar,
// });

registerApplication({
  name: "products",
  app: () => System.import("products"),
  activeWhen: () => true,
});

start({
  urlRerouteOnly: true,
});
