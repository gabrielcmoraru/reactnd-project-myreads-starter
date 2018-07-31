import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

export default class Search extends Component {
  state = {
    searchResults: [],
    query: '',
  };

  /* Call Search API using the input query, if result is found add to searchResults otherwise empty the array */
  handleQueryControl(query) {
    BooksAPI.search(query).then(searchResults => (searchResults ? this.setState({ searchResults }) : []));
    /* Update query string on each input */
    this.setState({ query });
    this.setState({ searchResults: [] });
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
          {/* When the results for the search is bigger than 0 display results;
          Map over results check against the books saved in the props if a shelf value is found asign to book if not leave empty;
        */}
          {this.state.searchResults.length > 0
        && this.state.searchResults.map((searchResult) => {
          let shelf = 'none';
          this.props.books.map(book => (
            book.id === searchResult.id
              ? shelf = book.shelf
              : 'None'
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
