import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';
import * as BooksAPI from './BooksAPI';


class Book extends React.Component {

  constructor(props) {
    super(props);
    this.shelf = { value: this.value };
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        BooksAPI.getAll().then((books) => {
          this.setState({
            books,
          });
        });
        console.log(this);
      });
  }

  updateState(element) {
    this.setState({ value: element });
    console.log({ value: element });
    BooksAPI.update(this.props.book.id, this.shelf);
  }

  render() {
    const options = [
      { value: 'wantToRead', label: 'Want to Read' },
      { value: 'curentlyReading', label: 'Currently Reading' },
      { value: 'read', label: 'Read' },
    ];

    const { book } = this.props;
    return (
      <MainWrapper>
        <Cover>
          <PosterImg src={book.imageLinks.thumbnail} alt={book.title} />
          <Select
            name="shelf-selector"
            value={this.shelf.value}
            options={options}
            placeholder={this.shelf.value}
            onChange={this.moveShelf}
          />
        </Cover>
        <Content>
          <p className="book-title">
            {book.title}
          </p>
          <p className="book-authors">
          By
            '
            {book.authors}
            '
          </p>
        </Content>
      </MainWrapper>
    );
  }
}


export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export const MainWrapper = styled.div`
  display:flex;
  width: 270px;
  justify-content: center;
  align-self: center;
  justify-self: center;
  box-shadow: 0 0 35px;
  margin: 1rem;
`;

export const PosterImg = styled.img`
  height: 170px;
  width: 135px;
`;

export const Cover = styled.div`
  display: grid;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap:wrap;
  text-align: left;
  width:100%;
  padding: 0.5rem;
  background: #777;
  color: white;
`;
