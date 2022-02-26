import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSearch } from "redux/search/searchActions";
import { RESET_SEARCH } from "redux/search/searchTypes";
import { RootState } from "redux/store";

interface ItemShape {
  name: string;
  title: string;
  media_type: string;
  id: number;
  vote_average: number;
}

const Searchbar: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = useState("");
  const { data } = useSelector((state: RootState) => state.search);

  // Show only pertinant results
  const bestResults = data.slice(0, 6);

  // Searchbar input ref
  const inputRef = useRef<HTMLInputElement>(null);

  // Autofocus input field
  useEffect(() => {
    inputRef.current?.focus();
  });

  // Request
  const fetchData = () => {
    dispatch(fetchSearch(value));
  };

  // From handlers
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);

    // Fetch results
    if (e.target.value.length >= 2) {
      fetchData();
    }

    // onClear
    if (data.lenght && !value.length) {
      dispatch({ type: RESET_SEARCH });
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    history.push({
      pathname: "/search",
      search: `q=${value}`,
    });
  };

  return (
    <form className="search-box search-form d-flex" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <div
          className={`autocomplete ${
            bestResults?.length ? "autocomplete--is-visible" : ""
          }`}
        >
          <input
            ref={inputRef}
            className="search form-control"
            type="search"
            placeholder="Rechercher un film, une série, une émission télévisée..."
            aria-label="search"
            onChange={handleChange}
          />
          <div className="autocomplete__list">
            {bestResults?.map((item: ItemShape) => (
              <div className="autocomplete__item" key={item.id}>
                <p className="fw-bold d-inline">{item.name || item.title}</p> ,{" "}
                {item.media_type === "movie" ? "Film" : "Série"},{" "}
                {`${item.vote_average * 10}%`}
              </div>
            ))}
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Rechercher
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
