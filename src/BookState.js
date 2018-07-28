import React, { Component } from 'react';
import PropType from 'prop-types';

class BookState extends Component {

  state = {
    shelf: this.props.book.shelf,
  }

   shelfer = (event) => {
     this.props.shelfer(this.props.book, event.target.value);
     this.setState({
       currentShelf: event.target.value,
       updating: true,
     });
   };

   render() {
     return `   <h1>
tetee
</h1>`;
   }

}

// BookState.propTypes = {
//   BookState: PropTypes.shape({
//     book: PropTypes.object.isRequired,
//     shelfer: PropType.func.isRequired,
//   }).isRequired,
// };

export default BookState;
