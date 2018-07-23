import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const Book = ({ book }) => (
  <div>
    <Cover src={book.imageLinks.thumbnail} alt={book.title} />
  </div>
);

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export const Cover = styled.img`
  box-shadow: 0 0 35px;
  height: 205px;
  width: 165px;
`;
