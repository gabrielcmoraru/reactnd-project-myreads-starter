import React from 'react';
import { Route } from 'react-router-dom';
import BooksList from './BooksList';
import Search from './Search';
import * as BooksAPI from './BooksAPI';


import './App.css';

class BooksApp extends React.Component {

  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books,
      });
    });
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({
          books,
        });
      });

    });
  }

/*eslint-disable */
  render() {
    return (
    <div className="app">
      <Route exact path="/"
        render={
        () => (<BooksList
          books={
            this.state.books
          }
          moveShelf={
            this.updateBook
          }
          />)
        }/>
      <Route path="/search"
        render={
        () => (<Search
          moveShelf={
            this.updateBook
          }
          books={
            this.state.books
          }
          />)
        }/>
    </div>);
  }
/* eslint-enable */
}


export default BooksApp;
