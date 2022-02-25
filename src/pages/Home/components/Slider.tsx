import React from "react";

import config from "config";

interface ItemShape {
  id: number;
  name?: string;
  title?: string;
  overview: string;
  backdrop_path: string;
}
interface Props {
  data: ItemShape[];
}

const Slider: React.FC<Props> = ({ data }) => {
  return (
    <div className="carousel-wrapper">
      <div
        id="home-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {data.map(({ id, backdrop_path, name, title, overview }, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={id}
            >
              <img
                src={`${config.cdnFullWidth}${backdrop_path}`}
                className="d-block w-100"
                alt={name || title}
              />

              <div className="carousel-caption d-none d-md-block">
                <h5>{name || title}</h5>
                <p>{overview}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#home-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#home-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
