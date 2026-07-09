import { useState } from "react";
import "./index.css";
import AppRoutes from "./routes/AppROutes";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster richColors position="top-right" expand={false} closeButton />
    </>
  );
}

export default App;
