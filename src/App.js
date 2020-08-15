import React from "react";
import Router from "./router/router";
import { GlobalStyle } from "./assets/globalStyle";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
