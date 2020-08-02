import { registerApplication, start } from "single-spa";

/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

import * as singleSpaEntry from "./single-spa-entry.js";

// Our loading function
// const loadingFunction = () => import('./single-spa-entry.js');
const loadingFunction = () => Promise.resolve(singleSpaEntry);

// Our activity function
const activityFunction = () => true;

registerApplication("@kombucha/create", loadingFunction, activityFunction);

start();
