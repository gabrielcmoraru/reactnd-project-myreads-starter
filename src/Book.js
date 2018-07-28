import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Book = ({ book, updateBook }) => {

  const imgBookReal = book.imageLinks.thumbnail ? book.imageLinks.smallThumbnail : '';

  return (
    <MainWrapper>
      <Cover>
        <PosterImg src={imgBookReal} alt={book.title} />
        <div className="book-shelf-changer">
          <select onChange={e => updateBook(book, e.target.value)} value={book.shelf}>
            <option value="none" disabled>
                    Move to...
            </option>
            <option value="currentlyReading">
                    Currently Reading
            </option>
            <option value="wantToRead">
                    Want to Read
            </option>
            <option value="read">
                    Read
            </option>
            <option value="none">
                    None
            </option>
          </select>
        </div>
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
};


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
  overflow: hidden;
`;
