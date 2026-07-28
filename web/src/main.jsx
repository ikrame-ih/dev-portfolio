import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./fonts.css";
import App from "./App.jsx";
import "./index.css";
import { initAnalytics } from "@/lib/analytics";
import { LocaleProvider } from "@/i18n/LocaleContext";

initAnalytics();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </StrictMode>,
);
