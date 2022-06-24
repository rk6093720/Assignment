import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import AppContextProviderWrapper from "./Context/AppProvider";

const rootElement = document.getElementById("root");
const root =createRoot(rootElement);
root.render(
  <StrictMode>
    <AppContextProviderWrapper>
      <App/>
    </AppContextProviderWrapper>
  </StrictMode>
);