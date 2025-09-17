import { useState } from 'react';
import App from '../../App';
import '../../App.css';
import '../../index.css';

const Bookshelf = ({books, newBook, handleInputChange, handleSubmit }) => {

return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Book Title: </label>
          <input
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange} // ← fix this typo!
          />
          <br />
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Bookshelf;