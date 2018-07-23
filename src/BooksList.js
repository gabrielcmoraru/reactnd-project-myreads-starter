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
        {this.state.books.map(book => <Book key={book.id} book={book} />)}
      </BookShelf>);
  }
}

export default BooksList;

const BookShelf = styled.div`
  display: grid;
  padding: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1rem;
  align-content: space-evenly;
`;
