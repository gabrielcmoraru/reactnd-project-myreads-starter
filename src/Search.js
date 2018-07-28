import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

export default class Search extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >
          Close
          </Link>
        </div>
      </div>
    );
  }
}
