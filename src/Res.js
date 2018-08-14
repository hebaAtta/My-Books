import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Books from './Books';
import BookList from './BookList';
import Search from './Search';

 class Res extends Component {
   render(){
     const {books}=this.props;
     return(
       <div className="bookshelf">
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map((book, idx) => (
            <Books

            shelf={book.shelf}
            />
          ))}
        </ol>
        </div>
     </div>
     )
   }
 }
 Res.propTypes = {
   books: PropTypes.array,
   moveTo: PropTypes.func,
 }
 export default Res
