import React from "react";
import "./styles.css";
import Buttons from '../Buttons'

function BookSearch() {
  return (
    <div className="jumbotron jumbotron-fluid jumb-book-search">
        <p className="book-search">Enter the book you are looking for:</p>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
            <div className="input-group-append">
                <Buttons btnName="Search"></Buttons>
            </div>
        </div>
    </div>
  )
}

export default BookSearch;