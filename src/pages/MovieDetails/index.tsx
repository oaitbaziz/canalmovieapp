import React, { useEffect } from "react";
import Heading from "components/Heading";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import Loading from "components/Loading";
import { fetchDetails } from "redux/movieDetails/movieDetailsActions";
import moment from "moment";
import config from "config";
import noCover from "assets/img/no_cover.jpg";

interface RouteParams {
  id: string;
  mediaType: string;
}

interface DataShape {
  name?: string;
  title?: string;
  status?: string;
  vote_average?: number;
  release_date?: string;
  poster_path?: string;
  genres?: [];
  runtime?: number;
  overview?: string;
  created_by?: [];
  first_air_date?: string;
}

const MovieDetails: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id, mediaType } = useParams<RouteParams>();

  useEffect(() => {
    dispatch(fetchDetails(id, mediaType));
  }, [id, mediaType, dispatch]);

  const { loading, error, data, notFound } = useSelector(
    (state: RootState) => state.details
  );

  const {
    name,
    title,
    vote_average,
    release_date,
    poster_path,
    genres,
    overview,
    created_by,
    first_air_date,
  }: DataShape = data;

  if (error) {
    history.push("/error");
    return <></>;
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  const src = poster_path ? `${config.cdnPosters}${poster_path}` : noCover;
  return (
    <div className="page-wrap movie-details-page">
      <div className="container">
        {notFound ? (
          <Heading text="L'élément que vous cherchez n'existe pas" />
        ) : (
          <div className="movie-info">
            <div className="movie-info__thumb">
              <img src={src} alt={name || title} />
            </div>
            <div className="movie-info__details">
              <h1 className="movie-info__title">{name || title}</h1>
              <div className="movie-info__type">
                <span>{mediaType === "movie" ? "Film" : "Série"}</span>
                <span>{moment(release_date || first_air_date).year()}</span>
                <span>
                  {genres
                    ?.map((genre: { name: string }) => genre.name)
                    .join(", ")}
                </span>
                {vote_average ? <span>{`${vote_average * 10}%`}</span> : null}
              </div>
              <div className="movie-info__subtitle">Synopsis</div>
              <p className="movie-info__text">{overview}</p>
              <div className="movie-info__subtitle-sm">
                {created_by
                  ?.map((creator: { name: string }) => creator.name)
                  .join(", ")}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
