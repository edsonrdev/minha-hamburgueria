import React from "react";

import ReactDOM from "react-dom/client";

import { Providers } from "./providers";
import { App } from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
