import React from "react";
import "./styles.css";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Google Book Search</h1>
            <p className="lead">Search for and Save Books of Interest</p>
        </div>
    </div>
  )
}

export default Header;