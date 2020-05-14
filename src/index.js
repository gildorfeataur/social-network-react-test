import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import store from "./mockup/reduxStore";

const renderDom = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} store={store} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderDom(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderDom(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
