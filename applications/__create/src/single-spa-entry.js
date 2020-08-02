import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact, { SingleSpaContext } from "single-spa-react";
import App from "./App";

const domElementGetter = () => {
  // Make sure there is a div for us to render into
  let el = document.getElementById("react-create");
  if (!el) {
    el = document.createElement("div");
    el.id = "react-create";
    document.body.appendChild(el);
  }

  return el;
};

// Note that SingleSpaContext is a react@16.3 (if available) context that provides
// the singleSpa props.
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  // rootComponent: App,
  rootComponent: () => (
    <React.StrictMode>
      {/* <SingleSpaContext> */}
      <App />
      {/* </SingleSpaContext> */}
    </React.StrictMode>
  ),
  //   errorBoundary(err, info, props) {
  //     // https://reactjs.org/docs/error-boundaries.html
  //     return (
  //       <div>Sorry, there has been an error.</div>
  //     );
  //   },
  domElementGetter,
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
