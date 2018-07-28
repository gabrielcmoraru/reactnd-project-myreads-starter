import React, { Component } from 'react';
import styled from 'styled-components';
import * as BooksAPI from './BooksAPI';
import Book from './Book.js';




class BooksList extends Component {
  state = {
    books: [],
    searchItems: [],
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
      <BookShelf>
        <Shelv>
          <ShelvTitle>
          Currently Reading
          </ShelvTitle>
          {this.state.books.filter(book => book.shelf === 'currentlyReading').map(book => <Book key={book.id} book={book} />)}
        </Shelv>
        <Shelv>
          <ShelvTitle>
          Want To Read
          </ShelvTitle>
          {this.state.books.filter(book => book.shelf === 'wantToRead').map(book => <Book key={book.id} book={book} />)}
        </Shelv>
        <Shelv>
          <ShelvTitle>
          Read
          </ShelvTitle>
          {this.state.books.filter(book => book.shelf === 'read').map(book => <Book key={book.id} book={book} />)}
        </Shelv>

      </BookShelf>
    );
  }
}

export default BooksList;

const BookShelf = styled.div`
  display: grid;
  padding: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 2rem;
  align-content: space-evenly;
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
