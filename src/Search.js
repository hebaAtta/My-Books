import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from "prop-types";


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


      const { query, results,update} = this.props.state



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
         <li key={book.id} className='books-list-item'
         appState={this.props.appState}
         book={book}>


          <div className="book">
          <div className="book-top">
          <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`
          }}>
          </div>
          <div className="book-shelf-changer">
          <select
          value={book.shelf || "none"}
          id={book.id}
          onChange={event => update(book, event.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
 </div>
             <div className="book-title">{book.title}</div>
             <div >{book.author}</div>
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
