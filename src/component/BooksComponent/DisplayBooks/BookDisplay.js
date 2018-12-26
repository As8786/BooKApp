import React from "react";
import PropsTypes from "prop-types";

const BookDisplay = props => {
  return (
    <div className="book-display-card">
      <div className="card">
        <div className="card-image">
          <img src={props.book.image} alt={`Book  ${props.book.name}`} />
          <span className="card-title">{props.book.name}</span>
          <button className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons">add</i>
          </button>
        </div>
        <div className="card-content">
          <div className="card-summary-container">{props.book.summary}</div>
        </div>
      </div>
    </div>
  );
};

BookDisplay.PropsTypes = {
  book: PropsTypes.object
};

export default BookDisplay;
