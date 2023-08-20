import "~/shared/styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "src/shared/providers";

import { AppRoutes } from "~/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>,
);
