import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

export default class Search extends Component {
  state = {
    searchResults: [],
    query: '',
  };

  handleQueryControl(query) {
    BooksAPI.search(query).then(searchResults => (searchResults ? this.setState({ searchResults }) : []));
    this.setState({ query });
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf);
  }

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
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search your favourite book here"
              value={this.state.query}
              onChange={e => this.handleQueryControl(e.target.value)}
            />
          </div>
        </div>
        <div className="search-book-results" />
        <ol className="books-grid">
          {this.state.searchResults.length > 0
        && this.state.searchResults.map((searchResult) => {
          let shelf = 'none';
          this.props.books.map(book => (
            book.id === searchResult.id
              ? shelf = book.shelf
              : ''
          ));
          return (
            <Book
              key={searchResult.id}
              book={searchResult}
              moveShelf={
                this.props.moveShelf
              }
              currentShelf={shelf}
              />
          );
        })}
        </ol>
      </div>
    );
  }
}
