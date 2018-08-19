import React from 'react'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList';
import {Route} from 'react-router-dom';
import Search from "./Search";
import sortBy from 'sort-by';
class BooksApp extends React.Component {
  state ={
    books:[],
    current:[],
    want:[],
    Read:[],
    query:'',
    results: [],
    searchingpage: false
  }


  componentDidMount() {
    BooksAPI.getAll().then(books => {
        this.setState({ books });
      });
  }

  // update books in home page
  updateBooks = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
        this.setState(state => ({
           books:state.books.filter(b => {
             if (b.id === book.id) {
                  return (book.shelf = shelf);
                }
                  else {
                    console.log("heba");
                     return book;
             }
          })
        }));
      });
    };


//searchBooks
searchBooks = (query) => {
   this.setState({query, searchingpage: true}, () => {

     BooksAPI.search(query, 20).then(results => {
       if (results.error) {
         this.setState({searchingpage: false, results: []})
       } else {
         this.setState({
           searchingpage: false,
           results: results.sort(sortBy('title'))
         })
       }
     })
   })
 }

clearSearch = () => {
this.setState({query: '', results: [], searching: false})
}

  render() {
    return (
      <div className="app">
      <Route
           exact
           path="/"
            render={() => (
             <BookList
             state={this.state}
             update={this.updateBooks}/>
           )}
         />

      <Route exact path="/search" render={() =>(
       <Search
       state={this.state}
       books={this.state.books}
       searchBooks={this.searchBooks}
       clearSearch={this.clearSearch}
       update={this.updateBooks}
       />
     )} />
    }
    />

      </div>
    )
  }
}

export default BooksApp
