import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Books from "./Books";

class BookList extends React.Component {



  render(){
const { state ,update}=this.props;

 const current =state.books.filter(book => book.shelf === "currentlyReading");
 const Want =state.books.filter(book => book.shelf === "wantToRead");
 const Read = state.books.filter(book => book.shelf === "read");
    return(
      <div className="list-books">
       <div className="list-books-title">
         <h1>MyReads</h1>
       </div>
       <div className="list-books-content">
       <div>
       {current.length > 0 && (
             <div className="bookshelf">
               <h2 className="bookshelf-title">Currently Reading</h2>
               <div className="bookshelf-books">
                 <Books
                   books={current}
                   update={update}
                   />
               </div>
             </div>
           )}
         </div>
         <div>
         {Want.length > 0 && (
               <div className="bookshelf">
                 <h2 className="bookshelf-title">wantToRead</h2>
                 <div className="bookshelf-books">
                   <Books
                     books={Want}
                     update={update}
                     />
                 </div>
               </div>
             )}
           </div>
           <div>
           {Read.length > 0 && (
                 <div className="bookshelf">
                   <h2 className="bookshelf-title">Read</h2>
                   <div className="bookshelf-books">
                     <Books
                       books={Read}
                       update={update}
                       />
                   </div>
                 </div>
               )}
             </div>
             </div>
      <div>
        <Link to="/search" className="open-search">
          go to Search
        </Link>
      </div>
    </div>
  )

  }
}
BookList.propTypes = {
  state: PropTypes.object.isRequired,
  update: PropTypes.func
};
export default BookList
