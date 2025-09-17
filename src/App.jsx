// src/App.jsx
import { useState } from 'react';
import './App.css';
import Bookshelf from './components/Bookshelf/Bookshelf.jsx';

const App = () => {
  const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);
const [newBook, setNewBook] = useState({
  title: '', 
  author: ''
})

const handleInputChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
  setNewBook({...newBook, [event.target.name]: event.target.value})
}

const handleSubmit = (event) => {
  event.preventDefault()
  setBooks(updatedBooks => [...updatedBooks , newBook])
  setNewBook({title: '', author: ''})
}

  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf 
        books={books}
        newBook={newBook}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default App;
