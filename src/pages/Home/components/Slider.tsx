import React from "react";

import { trending } from "data";
import config from "config";

const Slider = () => {
  const data = trending.results.filter(
    ({ media_type }) => media_type === "movie" || media_type === "tv"
  );
  return (
    <div className="carousel-wrapper">
      <div
        id="home-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {data.map((item, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img
                src={`${config.cdnUrl}${item.backdrop_path}`}
                className="d-block w-100"
                alt={item.name || item.title}
              />
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>{item.name || item.title}</h5>
                <p>{item.overview}</p>
              </div> */}
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
