import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/context";
import { AdminProvider } from "./context/Admin";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
      <AdminProvider>
        <App />
      </AdminProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
