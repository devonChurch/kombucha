import singleSpaAngular1 from "single-spa-angular1";
import angular from "angular";

import "./app.module.js";
import "./routes.js";

const domElementGetter = () => {
  // Make sure there is a div for us to render into
  let el = document.getElementById("angular-settings");
  if (!el) {
    el = document.createElement("div");
    el.id = "angular-settings";
    document.body.appendChild(el);
  }

  return el;
};

const angularLifecycles = singleSpaAngular1({
  angular: angular,
  domElementGetter: domElementGetter,
  mainAngularModule: "app",
  uiRouter: true,
  preserveGlobal: false,
  template: `<root />`,
});

export function bootstrap(props) {
  return angularLifecycles.bootstrap(props);
}

export function mount(props) {
  return angularLifecycles.mount(props);
}

export function unmount(props) {
  return angularLifecycles.unmount(props);
}
