import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact, { SingleSpaContext } from 'single-spa-react';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Note that SingleSpaContext is a react@16.3 (if available) context that provides
// the singleSpa props.
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => (
    <React.StrictMode>
      <SingleSpaContext>
        <App />
      </SingleSpaContext>
    </React.StrictMode>),
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return (
      <div>Sorry, there has been an error.</div>
    );
  },
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;