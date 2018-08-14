import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import PropTypes from "prop-types";
import * as BooksAPI from './BooksAPI';
import Books from './Books';
import Res from './Res'
import BooksApp from './App'
  class Search extends Component {

  onChange = event => {
    const query = event.target.value.trim()
    if (query === '') {
      this.props.clearSearch()
      console.log("fffff");
    } else {
    this.props.searchBooks(query)
      console.log("55");
    }
  }
 /*state = {
   query :'',
   results:[],
   books:[],
   searchingpage: false
 }*/

 /*updatQuery =(query) =>{

   const { books } = this.props
   this.setState({query :query.target.value.trim()})

  if (query){
   BooksAPI.search(query, 20).then((results) => {
     if (results.length > 0) {
      results = results.filter(res => res.imageLinks);
      results = results.map(res => {
      const index = books.findIndex(book => book.id === res.id);
      return res;
      });
      this.setState({ results });

    }
       });
     }
}*/


 render(){

      const {  books } = this.props
      const {searchingpage, query, results,update} = this.props.state
      const noResults = !searchingpage && query && results.length < 1


   return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          {}
          <input type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={this.onChange}
          />

        </div>
      </div>
      <div className="search-books-results">
      <ol className="books-grid">
       {results.map(book =>
        <li key={book.id}
         appState={this.props.appState}
         book={book}>

        <div>

          <p>{book.title}</p>
          <p>{book.author}</p>
          <p
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`
          }}></p>
          


       </div>
       </li>
       )}
    </ol>
         </div>
         </div>


  )
  }
}
Search.propTypes = {
  books: PropTypes.array,
  moveTo: PropTypes.func,
}
export default Search;
