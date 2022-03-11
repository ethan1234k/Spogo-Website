import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import mixpanel from "mixpanel-browser";
import { MixpanelProvider, MixpanelConsumer } from "react-mixpanel";
import { createStore } from "redux";
// mixpanel.init('d5e39b2a6fca81bf22847d85df8071a8');

var productionHost = "spogo.us";
var devToken = "b7ac1d825d9c334bd9edd9284f58d2f3";
var prodToken = "caa15e20ffbb02e3045ab4b5210c572e";

if (window.location.hostname.toLowerCase().search(productionHost) < 0) {
  mixpanel.init(devToken);
  console.log('DEV')
} else {
  console.log('PROD')
  mixpanel.init(prodToken);
}

export const Mixpanel = mixpanel;

const thisStore = createStore(store)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={thisStore}>
      <MixpanelProvider mixpanel={mixpanel}>
        <App />
      </MixpanelProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
