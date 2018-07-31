import React from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const Book = ({
  book, currentShelf, moveShelf,
}) => {

  /* Check if image exists for specific book if not replace with a stock pic */
  const bookImgReal = book.imageLinks ? book.imageLinks.smallThumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';
  /* Check if authors exists for specific book if not show "Unknown Authors" */
  const bookAuthorReal = book.authors ? book.authors : 'Unknown Authors';

  return (
    <Overdrive id={book.id}>
      <MainWrapper>
        <Cover>
            <PosterImg src={bookImgReal} alt={book.title} />
            <div className="custom-dropdown small">
            <select
              onChange={event => moveShelf(
              book, event.target.value)}
              value={currentShelf}
          >
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
          {bookAuthorReal}
            '
        </p>
          </Content>
      </MainWrapper>
    </Overdrive>
  );
};

export default Book;

export const MainWrapper = styled.div`
  display:flex;
  width: 300px;
  height: 200px;
  align-self: center;
  justify-self: center;
  box-shadow: 0 0 35px;
  margin: 1rem;
`;

export const PosterImg = styled.img`
  height: 173px;
  width: 140px;
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
