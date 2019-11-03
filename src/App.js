import "babel-polyfill";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { Router } from "@reach/router";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

const App = () => {
  const themeHook = useState("darkblue");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
