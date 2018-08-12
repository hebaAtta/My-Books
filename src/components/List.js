import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

class List extends Component {


  render() {
    const book = this.props.book;
      const  {filterBooks } = this.props;
      return (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {filterBooks.length > 0 &&
              filterBooks.map(filteredBook => (
                <li key={filterBooks.title}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          backgroundImage: `url(${filterBooks.imageLinks.thumbnail})`
                        }}
                      />
                      <div className="book-shelf-changer">
                        <select
                          name="shelf"
                          onChange={e => this.props.change(e, filterBooks)}
                          value={filterBooks.shelf}
                        >
                          <option value="none" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead">
                            Want to Read
                          </option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">
                      {filterBooks.title}
                    </div>
                    <div className="book-authors">
                      {filterBooks.authors
                        ? filterBooks.authors.join(", ")
                        : ""}
                    </div>
                  </div>
                </li>
              ))}
          </ol>
        </div>
      );
    }
  }
export default List;
