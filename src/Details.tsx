import React, { useEffect, useState, useContext, lazy } from "react";
import pet, { Photo } from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary.js";
import ThemeContext from "./ThemeContext";
import { navigate, RouteComponentProps } from "@reach/router";

const Modal = lazy(() => import("./Modal"));

const Details = (props: RouteComponentProps<{ id: string }>) => {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState([] as Photo[]);
  const [breed, setBreed] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    if (!props.id) {
      navigate("/");
      return;
    }
    pet.animal(+props.id).then(({ animal: apiAnimal }) => {
      setName(apiAnimal.name);
      setAnimal(apiAnimal.type);
      setLocation(
        `${apiAnimal.contact.address.city}, ${apiAnimal.contact.address.state}`
      );
      setDescription(apiAnimal.description);
      setMedia(apiAnimal.photos);
      setBreed(apiAnimal.breeds.primary);
      setUrl(apiAnimal.url);
      setLoading(false);
    }, console.error);
  }, [props.id]);

  const toggleModal: () => void = () => {
    setShowModal(!showModal);
  };

  const adopt: () => void = () => navigate(url);

  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div className="details">
      <Carousel media={media} />
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} -  ${breed} - ${location}`}</h2>
        <button onClick={toggleModal} style={{ backgroundColor: theme }}>
          Adopt {name}
        </button>
        <p>{description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={adopt}>Yes</button>
                <button onClick={toggleModal}>No, I am a monster</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default function DetailsWithErrorBoundary(
  props: RouteComponentProps<{ id: string }>
) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
