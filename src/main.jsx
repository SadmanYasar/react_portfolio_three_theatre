import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
const App = lazy(() => import("./App"));
import "./index.css";
import Fallback from "./components/Pages/Fallback";

// studio.extend(extension);
// studio.initialize();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Fallback />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
