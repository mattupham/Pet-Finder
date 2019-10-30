import React, { useEffect, useState, useContext } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary.js";
import ThemeContext from "./ThemeContext";

const Details = props => {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [breed, setBreed] = useState("");
  const [loading, setLoading] = useState(true);
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    pet.animal(props.id).then(({ animal: apiAnimal }) => {
      setName(apiAnimal.name);
      setAnimal(apiAnimal.type);
      setLocation(
        `${apiAnimal.contact.address.city}, ${apiAnimal.contact.address.state}`
      );
      setDescription(apiAnimal.description);
      setMedia(apiAnimal.photos);
      setBreed(apiAnimal.breeds.primary);
      setLoading(false);
    }, console.error);
  }, [props.id]);

  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div className="details">
      <Carousel media={media} />
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} -  ${breed} - ${location}`}</h2>
        <button style={{ backgroundColor: theme }}>Adopt {name}</button>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
