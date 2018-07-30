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

  /* On load call importBooks() */
  componentDidMount() {
    this.importBooks();
  }

  /* GET books from API the add them to the state  */
  importBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books,
      });
      console.log(this.state.books);
    });
  }

  /* Update shelf state on the database using the API on the selected book  */
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
  /* Export using the Router props to use in different components */
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
}


export default BooksApp;
