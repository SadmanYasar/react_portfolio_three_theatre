import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
const App = lazy(() => import("./App"));
import "./index.css";
import Loading from "./components/Pages/Loading";
// import App from "./App";
import LoadingScreen from "./components/Pages/Loading";

// studio.extend(extension);
// studio.initialize();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
