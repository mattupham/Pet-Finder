import React, { useState } from "react";

const Carousel = ({ media: photos }) => {
  const [active, setActive] = useState(0);

  const handleIndexClick = event => {
    setActive(+event.target.dataset.index);
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
