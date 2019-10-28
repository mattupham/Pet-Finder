import "babel-polyfill";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams></SearchParams>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
