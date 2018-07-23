import React from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book.js';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchItems: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  }

  async componentDidMount() {
    try {
      BooksAPI.getAll().then((books) => {
        this.setState({
          books,
        });
        console.log(this.state.books);
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="app">
        {this.state.books.map(book => <Book key={book.id} book={book} />)}
        {/* <div className="search-books">
<div className="search-books-bar">
<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>
Close
</a>
<div className="search-books-input-wrapper">
<input type="text" placeholder="Search by title or author" />
</div>
</div>
<div className="search-books-results">
<ol className="books-grid" />
</div> */}
      </div>);
  }
}

export default BooksApp;
