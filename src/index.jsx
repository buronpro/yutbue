import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as NavProvider } from "./Context/Nav";
import { Provider as TokenProvider } from "./Context/Token";
import { Provider as ThemeProvider } from "./Context/Theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenProvider>
        <ThemeProvider>
          <NavProvider>
            <App />
          </NavProvider>
        </ThemeProvider>
      </TokenProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
