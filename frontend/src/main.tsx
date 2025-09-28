import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App.js";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
        <App />
        </ErrorBoundary>
      </Provider>
    </StrictMode>,
  );
} else {
  throw new Error('Root container not found');
}
