import React from "react";

const Searchbar: React.FC = () => {
  return (
    <form className="search-box search-form d-flex">
      <div className="input-group mb-3">
        <div className="autocomplete autocomplete--is-visible">
          <input
            className="search form-control"
            type="search"
            placeholder="Rechercher un film, une série, une émission télévisée..."
            aria-label="search"
          />
          <div className="autocomplete__list">
            <div className="autocomplete__item">Gone Girl</div>
            <div className="autocomplete__item">I'm a legend</div>
            <div className="autocomplete__item">Friends</div>
            <div className="autocomplete__item">Lost</div>
            <div className="autocomplete__item">Mr. Robot</div>
            <div className="autocomplete__item">Game of thrones</div>
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
