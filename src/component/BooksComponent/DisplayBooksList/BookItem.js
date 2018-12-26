import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";

const BookItem = props => {
  return (
    <div className="book-display-card">
      <div className="card">
        <div className="card-image">
          <img src={props.book.image} alt={`Book  ${props.book.name}`} />
          <span className="card-title">{props.book.name}</span>
          <button className="btn-floating halfway-fab waves-effect waves-light red">
            <Link to={`/books/${props.book.id}`}>
              <i className="material-icons">add</i>
            </Link>
          </button>
        </div>
        <div className="card-content">
          <div className="card-summary-container">{props.book.summary}</div>
        </div>
      </div>
    </div>
  );
};

BookItem.PropsTypes = {
  book: PropsTypes.object
};

export default BookItem;
