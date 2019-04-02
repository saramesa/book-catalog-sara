import React, { Component, Fragment } from 'react';
import Header from '../../components/Header';
import Filters from '../../components/Filters';
import BookList from '../../components/BookList';

class Catalog extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <Fragment>
        <Header />
        <Filters />
        <BookList />
      </Fragment>
      );
    }
}

export default Catalog;
