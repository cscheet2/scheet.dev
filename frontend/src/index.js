import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import "./index.css";

import { store } from "./app/store.js";
import { App } from "./app.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div id="portrait">
          <h1 className="text-3xl font-bold underline">haii</h1>
          <App/>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>
);
