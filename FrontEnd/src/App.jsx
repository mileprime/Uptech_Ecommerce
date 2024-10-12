import { useState } from "react";
import Home from "./Pages/Home";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  return (
    <ErrorBoundary>
      <div>
        <Home />
      </div>
    </ErrorBoundary>
  );
}

export default App;
