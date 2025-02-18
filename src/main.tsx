import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { MameThemeProvider } from "./theme/theme.tsx";

import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MameThemeProvider>
      <App />
    </MameThemeProvider>
  </StrictMode>
);
