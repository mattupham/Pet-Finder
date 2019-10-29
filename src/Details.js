import React, { useEffect, useState } from "react";
import pet from "@frontendmasters/pet";

const Details = props => {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [breed, setBreed] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pet.animal(props.id).then(({ animal: apiAnimal }) => {
      console.log(apiAnimal);
      // setName(apiAnimal.name);
      setAnimal(apiAnimal.type);
      setLocation(
        `${apiAnimal.contact.address.city}, ${apiAnimal.contact.address.state}`
      );
      setDescription(apiAnimal.description);
      setMedia(apiAnimal.photos);
      setBreed(apiAnimal.breeds.primary);
      setLoading(false);
    }, console.error);
  });

  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div className="details">
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} -  ${breed} - ${location}`}</h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Details;
