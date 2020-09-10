import React from "react";
import ReactDOM from "react-dom";
import AuthContextProvider from "./ContextTheme/ThemeApp";
// import ThemeProvider from './ContextTheme/ThemeApp'
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(


  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  rootElement
);
