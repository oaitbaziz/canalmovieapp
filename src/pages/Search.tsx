import { searchResult } from "data";
import config from "config";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Search = () => {
  let q = useQuery();
  useEffect(() => {
    console.log(q.get("q"));
  });

  const data = searchResult.results.filter(
    ({ media_type }) => media_type === "movie" || media_type === "tv"
  );

  return (
    <div className="search-page">
      <div className="container">
        <p className="h1 pb-5">
          Vos résultats de recherche pour {`"${q.get("q")}"`}
        </p>
        <div className="row gy-4">
          {data.map((item) => (
            <div className="col-md-2" key={item.id}>
              <div className="card">
                <div className="card-block">
                  {/* <h4 className="card-title">{item.name || item.title}</h4> */}
                  {/* <h6 className="card-subtitle text-muted">
                    {item.media_type}
                  </h6> */}
                  <div className="d-block">
                    <img
                      src={`${config.cdnPosters}${item.poster_path}`}
                      alt={item.name || item.title}
                      className="card-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
