import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top" style={{backgroundColor: 'rgb(22, 40, 54)'}}>
          <div className="container">
            <Link className="navbar-brand" to="/">
              <p></p><p className="text-info"><img src="plant.png" alt="..." height="32"/>Mrudha</p>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/" id="navv">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/yield" id="navv">Predict Yield</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/data" id="navv">View Data</Link>
                </li>
                

              </ul>
            </div>
          </div>
        </nav>
    </>
);

export default Navbar;