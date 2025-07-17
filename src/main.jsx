import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AppRouter } from "./routes/AppRouter";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
  // </StrictMode>
);
