import React, { useState } from "react";
import { Photo } from "@frontendmasters/pet";

interface IProps {
  media: Photo[];
}
const Carousel = ({ media: photos }: IProps) => {
  const [active, setActive] = useState(0);

  const handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    if (event.target.dataset.index) {
      setActive(+event.target.dataset.index);
    }
  };

  return (
    <div className="carousel">
      <img
        src={photos[active].large || "http://placecorgi.com/600/600"}
        alt="animal"
      />
      <div className="carousel-smaller">
        {photos.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo.large}
            onClick={handleIndexClick}
            data-index={index}
            src={photo.large}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
