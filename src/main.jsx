import React from "react";

import ReactDOM from "react-dom/client";

import { Providers } from "./providers";
import { App } from "./App.jsx";
import { GlobalStyles } from "./styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <GlobalStyles />
      <App />
    </Providers>
  </React.StrictMode>
);
