import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Book from './Book';
import * as BooksAPI from './BooksAPI';


class BooksList extends Component {
  state = {
    books: [],
  }

  /* On load call importBooks() */
  componentDidMount() {
    this.importBooks();
  }

  /* Update shelf state on the database using the API on the selected book   */
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({
          books,
        });
      });
    });
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

/*eslint-disable */

  render() {
    const {
      books, currentlyReading, wantToRead, read, moveShelf,
    } = this.props;

    return (
      <div>
        <h1>
        - THE LIBRARY -
        </h1>
        <BookShelf>
          <Shelv>
            <ShelvTitle>
             Currently Reading
            </ShelvTitle>
            {
            this.state.books
              .filter(book => book.shelf === 'currentlyReading')
              .map(book => (
                <Book
                  key={book.id}
                  book={book}
                  currentShelf="currentlyReading"
                  moveShelf={this.updateBook.bind(this)}
                />
              ))
            }
          </Shelv>
          <Shelv>
            <ShelvTitle>
            Want to Read
            </ShelvTitle>
            {
            this.state.books
              .filter(book => book.shelf === 'wantToRead')
              .map(book => (
                <Book
                  key={book.id}
                  book={book}
                  currentShelf="wantToRead"
                  moveShelf={this.updateBook.bind(this)}
                />
              ))
            }
          </Shelv>
          <Shelv>
            <ShelvTitle>
            Read
            </ShelvTitle>
            {
            this.state.books
              .filter(book => book.shelf === 'read')
              .map(book => (
                <Book
                  key={book.id}
                  book={book}
                  currentShelf="read"
                  moveShelf={this.updateBook.bind(this)}
                />
              ))
            }
          </Shelv>
          <div className="open-search">
            <Link
              to="/search"
            >
            Search online
            </Link>
          </div>
        </BookShelf>
      </div>
    );
  }
}
/* eslint-enable */

export default BooksList;

const BookShelf = styled.div`
  display: grid;
  padding: 1rem;
  justify-content: space-evenly;
  align-content: top;
  grid-template-columns: repeat(auto-fill, minmax(350px, 390px) );
  grid-row-gap: 2rem;
`;

const Shelv = styled.div`
  display: block;
  justify-self: center;
`;

const ShelvTitle = styled.h1`
  display: block;
  cursor: pointer;
  justify-self: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  &:after {
    content:'';
    display:block;
    height:0.4em;
    width:25%;
    margin:auto;
    border-bottom:solid ;
  }
  &:hover {
    color:orange;}
`;
