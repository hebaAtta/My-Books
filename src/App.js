
 import * as BooksAPI from './BooksAPI'
import React, { Component } from 'react';
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/Home";
import Search from "./components/Search";
import Error from "./components/Error";
import { getAll, update } from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: true

};
refreshBookList = () => {
        this.setState({
            myRequestComplete: false,
            books: []
        })

        getAll()
            .then((data) => {
                this.setState({
                    books: data,
                    myRequestComplete: true
                })
                this.updateBookShelfAssoc(data);
            });
    }


  render() {
    return (
      <div className="app">
      <Route exact path="/search" render={() =>(
        <Search />
      )} />
      <Route
           exact
           path="/"
           render={() => (
             <Home/>
           )}
         />

      </div>
    );
  }
}

export default BooksApp
