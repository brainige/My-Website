import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// #region agent log
const sendDebugLog = (hypothesisId: string, location: string, message: string, data: Record<string, unknown>) => {
  fetch("http://127.0.0.1:7772/ingest/1a9c5d34-7853-4ae5-ab7f-06a450dbff04", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "5bbff7" },
    body: JSON.stringify({
      sessionId: "5bbff7",
      runId: "baseline",
      hypothesisId,
      location,
      message,
      data,
      timestamp: Date.now()
    })
  }).catch(() => {});
};
// #endregion

// #region agent log
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

console.error = (...args) => {
  sendDebugLog("H1", "src/main.tsx:console.error", "Console error captured", {
    args: args.map((arg) => String(arg).slice(0, 300))
  });
  originalConsoleError(...args);
};

console.warn = (...args) => {
  sendDebugLog("H2", "src/main.tsx:console.warn", "Console warning captured", {
    args: args.map((arg) => String(arg).slice(0, 300))
  });
  originalConsoleWarn(...args);
};
// #endregion

// #region agent log
window.addEventListener("error", (event) => {
  sendDebugLog("H3", "src/main.tsx:window.error", "Window error event", {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno
  });
});
// #endregion

// #region agent log
window.addEventListener("unhandledrejection", (event) => {
  sendDebugLog("H4", "src/main.tsx:window.unhandledrejection", "Unhandled promise rejection", {
    reason: String(event.reason).slice(0, 300)
  });
});
// #endregion

// #region agent log
sendDebugLog("H5", "src/main.tsx:startup", "App render starting", {
  path: window.location.hash || window.location.pathname
});
// #endregion

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
