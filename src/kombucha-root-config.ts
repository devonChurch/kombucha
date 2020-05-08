import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication({
  name: "@kombucha/navbar",
  app: () => System.import("@kombucha/navbar"),
  activeWhen: isActive.navbar,
});

start({
  urlRerouteOnly: true,
});
