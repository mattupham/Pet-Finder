import React, { useState } from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Pepper" animal="Bird" breed="Cockatiel"></Pet>
      <Pet name="Doink" animal="Cat" breed="Mixed"></Pet>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
