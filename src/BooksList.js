import React, { Component } from 'react';
import styled from 'styled-components';
import Book from './Book.js';
import * as BooksAPI from './BooksAPI';




class BooksList extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }

  componentDidMount() {
    this.importBooks();
    console.log(this.state);
  }

  importBooks() {
    BooksAPI.getAll().then((books) => {
      const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
      const wantToRead = books.filter(book => book.shelf === 'wantToRead');
      const read = books.filter(book => book.shelf === 'read');
      this.setState({
        currentlyReading,
        wantToRead,
        read,
      });
    });
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then(() => this.importBooks());
  }

  displayShelf(books, title) {
    return (
      <BookShelf>
        <Shelv>
          <ShelvTitle>
            {title}
          </ShelvTitle>
          {books.map((book, index) => (
            <Book
              key={index}
              book={book}
              updateBook={this.updateBook.bind(this)}
          />
          ))}
        </Shelv>
      </BookShelf>
    );
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state;

    return (
      <BookShelf>
        {this.displayShelf(currentlyReading, 'Curently Reading')}
        {this.displayShelf(wantToRead, 'Want to Read')}
        {this.displayShelf(read, 'Read')}
      </BookShelf>
    );
  }
}

export default BooksList;

const BookShelf = styled.div`
  display: grid;
  padding: 1rem;
  justifyContent: top;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1rem;
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
    height:0.2em;
    width:35%;
    margin:auto;
    border-bottom:solid ;
  }
  &:hover {
    color:orange;}
`;
