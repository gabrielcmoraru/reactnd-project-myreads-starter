import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

export default class Search extends Component {
  state = {
    books: [],
    query: '',
  };

  handleQueryControl(query) {
    BooksAPI.search(query).then(books => (books ? this.setState({ books }) : []));
    this.setState({ query });
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf);
  }

  renderSearch() {
    const { books, query } = this.state;

    if (query) {
      return books.error
        ? (
          <div>
        No results found
          </div>
        )
        : books.map((book, index) => (
          <Book
            key={index}
            book={book}
            updateBook={this.updateBook.bind(this)}
          />
        ));
    }
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
          {this.renderSearch()}
        </ol>
      </div>
    );
  }
}
