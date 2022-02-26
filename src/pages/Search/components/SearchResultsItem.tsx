import React from "react";
import config from "config";
import noCover from "assets/img/no_cover.jpg";

interface Props {
  id: number;
  name?: string;
  title?: string;
  poster_path?: string | null;
}

const SearchResultsItem: React.FC<Props> = ({
  id,
  poster_path,
  name,
  title,
}) => {
  const src = poster_path ? `${config.cdnPosters}${poster_path}` : noCover;
  return (
    <div className="movie-card" key={id}>
      <div className="movie-card__thumb">
        <img src={src} alt={name || title} className="card-img" />
      </div>
      <div className="movie-card__content pt-1">
        <div className="movie-card__title">{name || title}</div>
      </div>
    </div>
  );
};

export default SearchResultsItem;
