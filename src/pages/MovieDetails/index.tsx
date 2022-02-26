import React from "react";

const MovieDetails = () => {
  return (
    <div className="page-wrap movie-details-page">
      <div className="container">
        <div className="movie-info">
          <div className="movie-info__thumb"></div>
          <div className="movie-info__details">
            <h1 className="movie-info__title">Good Doctor</h1>
            <div className="movie-info__type">
              <span>TV</span>
              <span>Drame</span>
              <span>43m</span>
            </div>
            <div className="movie-info__subtitle">Synopsis</div>
            <p className="movie-info__text">
              Atteint d'un trouble du spectre de l'autisme, avec un haut niveau
              de fonctionnement, le Docteur en chirurgie Shaun Murphy rejoint un
              prestigieux hôpital de San Jose, en Californie. Isolé, il éprouve
              des difficultés à s'intégrer à l'équipe. Mais en mettant son
              incroyable don de savant au service de ses patients, ce jeune
              prodige finit par susciter l'admiration de ses collègues, même les
              plus sceptiques.
            </p>
            <div className="movie-info__subtitle-sm">David Shore</div>
            <p className="movie-info__text-sm">Créatrice / Créateur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
