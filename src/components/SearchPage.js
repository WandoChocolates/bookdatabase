import React, {useState} from "react";
import axios from 'axios';

import BookSearchForm from './BookSearchForm';
import Loader from './Loader';
import BooksList from './BooksList';

export default function SearchPage() {
  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    items: [],
    rank: 0,
    title: "",
    author: "",
    book_image: "",
    amazon_product_url: ""
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState({ items: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  }
  
  const API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    // set loading Before API operation starts
    setLoading(true);
    setError(false);
    try {
      // Ajax call to API using Axios
      const result = await axios.get(`${API_URL}?q=${searchTerm}`);
      // Books result
      setBooks(result.data);
    }
    catch(error) {
      setError(true);
    }
    // After API operation end
    setLoading(false);
  }

  // Submit handler
  const onSubmitHandler = (e) => {
    // Prevent browser refreshing after form submission
    e.preventDefault();
    // Call fetch books async function
    fetchBooks();
  }

  

  console.log(books);

  return (
    <div>
      

      <section>
        <BookSearchForm
          onSubmitHandler={onSubmitHandler}
          onInputChange={onInputChange}
          searchTerm={searchTerm}
          error={error}
        />
        <Loader searchTerm={searchTerm} loading={loading} />
        <BooksList books={books} />
      </section>
    </div>
  );
}
