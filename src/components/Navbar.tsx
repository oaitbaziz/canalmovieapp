import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props {
  history: object;
}

const Navbar: React.FC<Props & RouteComponentProps> = ({ history }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    history.push({
      pathname: "/search",
      search: `q=${value}`,
    });
  };
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top nav-bg">
        <div className="container">
          <a className="navbar-brand" href="/">
            Canal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li> */}
            </ul>
            <form className="search-form d-flex" onSubmit={handleSubmit}>
              <input
                className="search form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleChange}
                required
              />
              <button className="btn btn-outline-danger" type="submit">
                Recherche
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Navbar);
