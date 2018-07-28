import React from 'react';
import { Route } from 'react-router-dom';
import BooksList from './BooksList';
import Search from './Search';

import './App.css';

const BooksApp = () => (
  <div className="app">
    <Route path="/" exact component={BooksList} />
    <Route path="/search" component={Search} />
  </div>);

export default BooksApp;
