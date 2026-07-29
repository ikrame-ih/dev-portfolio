import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./fonts.css";
import App from "./App.jsx";
import "./index.css";
import { initAnalytics } from "@/lib/analytics";
import { LocaleProvider } from "@/i18n/LocaleContext";

initAnalytics();

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem", fontFamily: "monospace" }}>
          Something went wrong. Please refresh the page.
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </ErrorBoundary>
  </StrictMode>,
);
