import config from "config";
import React from "react";

interface Props {
  id: number;
  name?: string;
  title?: string;
  poster_path?: string | null;
  media_type: string;
}

const SearchResultsItem: React.FC<Props> = ({
  id,
  poster_path,
  name,
  title,
  media_type,
}) => {
  return (
    <div className="col-md-2" key={id}>
      <div className="card">
        <div className="card-block">
          {/* <h4 className="card-title">{name || title}</h4>
          <h6 className="card-subtitle text-muted">{media_type}</h6> */}
          <div className="d-block">
            <img
              src={`${config.cdnPosters}${poster_path}`}
              alt={name || title}
              className="card-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsItem;
