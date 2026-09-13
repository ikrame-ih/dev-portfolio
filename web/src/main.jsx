import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import "./fonts.css";
import App from "./App.jsx";
import "./index.css";
import { initAnalytics } from "@/lib/analytics";
import { LocaleProvider } from "@/i18n/LocaleContext";

initAnalytics();

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, detail: "" };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    const detail = `${error?.message || error}\n${info?.componentStack || ""}`;
    console.error(error, info);
    this.setState({ detail });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div
          data-testid="app-error"
          style={{ padding: "2rem", fontFamily: "monospace", whiteSpace: "pre-wrap" }}
        >
          Something went wrong. Please refresh the page.
          {this.state.detail && import.meta.env.DEV
            ? `\n\n${this.state.detail}`
            : ""}
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
        <LazyMotion features={domAnimation} strict={false}>
          <App />
        </LazyMotion>
      </LocaleProvider>
    </ErrorBoundary>
  </StrictMode>,
);
