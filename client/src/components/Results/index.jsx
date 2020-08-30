import React from "react";
import "./styles.css";
import ResultsTitles from "../ResultsTitles"

function BookSearch(props) {
  return (
    <div className="container-fluid results-container">
        <p className="results">{props.booksStatus}</p>
        <ResultsTitles></ResultsTitles>
    </div>
  )
}

export default BookSearch;