import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-4 px-lg-5">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <Link className="navbar-brand text-info" to="/">GameList</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                  <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              </ul>
          </div>
      </div>
    </nav>
  );
}

export default Navigation;
