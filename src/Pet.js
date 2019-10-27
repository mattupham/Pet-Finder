import React from "react";
// import { Link } from "@reach/router";

const Pet = props => {
  const { name, animal, breed } = props;

  return (
    <>
      <div className="image-container">
        {/* <img src={hero} alt={name} /> */}
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed}`}</h2>
      </div>
    </>
  );
};

export default Pet;
