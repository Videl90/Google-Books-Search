import React from 'react';
import "./styles.css";
import Buttons from "../Buttons"
//import { Link } from "react-router-dom";

function Navbar( props ) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <Buttons btnName="SEARCH"></Buttons>
                </li>
                <li className="nav-item">
                    <Buttons btnName="SAVED"></Buttons>
                </li>
              </ul>
            </div>
          </nav>

        )
}

export default Navbar;

