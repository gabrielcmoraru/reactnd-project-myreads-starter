import React from 'react';
import * as BooksAPI from './BooksAPI';

import Book from './Book.js';
import BooksList from './BooksList';

import './App.css';

const BooksApp = () => (
  <div className="app">
    <BooksList />
  </div>);

export default BooksApp;
