import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import "./index.css";

import { store } from "./app/store.js";
import { App } from "./app.js";
import { NavBar } from "./features/navbar/navbar.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div id="portrait">
          <NavBar/>
          <div className="p-10"><App/></div>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>
);
