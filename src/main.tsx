import "~/styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { AppProvider } from "~/providers";
import { AppRoutes } from "~/routes";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>,
);
