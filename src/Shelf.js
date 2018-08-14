import React from "react";
import PropTypes from "prop-types";

function Shelf (props) {

  return (
      <ol className="books-grid">

        {props.books.map(book => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                {}
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                  }}>
                </div>
                <div className="book-shelf-changer">
                 {/* If a book is not categorized, set category "none" */}
                 <select
                   value={book.shelf || "none"}
                   id={book.id}

                 >
                   <option value="move" disabled>Move to...</option>
                   <option value="currentlyReading">Currently Reading</option>
                   <option value="wantToRead">Want to Read</option>
                   <option value="read">Read</option>
                   <option value="none">None</option>
                 </select>
               </div>
             </div>
            <div className="book-title">{book.title}</div>
            </div>
  </li>
))}
</ol>
);
}


                Shelf.propTypes = {
                books: PropTypes.array.isRequired,
                update: PropTypes.func
              };

              export default Shelf;
