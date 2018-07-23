import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Dropdown from 'react-dropdown';
import Overdrive from 'react-overdrive';

const options = [
  { value: 'one', label: 'Currently Reading' },
  { value: 'two', label: 'Want to Read' },
  { value: 'three', label: 'Read' },
];
const defaultOption = options[3];

const Book = ({ book }) => (
  <div>
    <Cover src={book.imageLinks.thumbnail} alt={book.title} />
    <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Shelfing Options " />
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
  height: 225px;
  width: 165px;
`;
