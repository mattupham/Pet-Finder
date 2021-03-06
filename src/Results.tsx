import React from "react";
import Pet from "./Pet";
import { Animal } from "@frontendmasters/pet";

interface IProps {
  pets: Animal[];
}

const Results = ({ pets }: IProps) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(pet => {
          console.log("PET: ", pet);
          return (
            <Pet
              animal={pet.type}
              key={pet.id}
              id={pet.id}
              name={pet.name}
              breed={pet.breeds.primary}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
