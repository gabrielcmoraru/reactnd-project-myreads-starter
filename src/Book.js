import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const Book = ({ book }) => (
  <div>
    <p>
      {book.title}
    </p>
  </div>
);

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
