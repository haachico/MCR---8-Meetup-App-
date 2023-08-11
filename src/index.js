import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  MeetupsContext,
  MeetupsContextProvider
} from "./useContext/MeetupsContext";

import App from "./App";

export { MeetupsContext };

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <MeetupsContextProvider>
        <App />
      </MeetupsContextProvider>
    </BrowserRouter>
  </StrictMode>
);
