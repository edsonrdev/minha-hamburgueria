import React from "react";

import ReactDOM from "react-dom/client";

import { Providers } from "./providers";
import { App } from "./App.jsx";
import { GlobalStyles } from "./styles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{
          fontSize: "1.5rem",
        }}
      />
      <GlobalStyles />
      <App />
    </Providers>
  </React.StrictMode>
);
